import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config({ path: path.resolve(__dirname, '../server/.env') });

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('❌ MONGO_URI is missing from backend/server/.env');
    process.exit(1);
}

const BACKUPS_DIR = path.resolve(__dirname, '../backups');

const createBackup = async () => {
    console.log('🚀 Initiating automated database backup...');

    // Ensure backups root directory exists
    if (!fs.existsSync(BACKUPS_DIR)) {
        fs.mkdirSync(BACKUPS_DIR, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const targetFolder = path.join(BACKUPS_DIR, `snapshot_${timestamp}`);
    fs.mkdirSync(targetFolder, { recursive: true });

    try {
        await mongoose.connect(MONGO_URI, { family: 4 });
        console.log('✅ Connected to MongoDB Atlas for backup snapshot');

        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();

        console.log(`📦 Found ${collections.length} collections to snapshot...`);

        const manifest = {
            timestamp: new Date().toISOString(),
            collections: {},
            totalRecords: 0
        };

        for (const col of collections) {
            const name = col.name;
            const records = await db.collection(name).find({}).toArray();
            const filePath = path.join(targetFolder, `${name}.json`);

            fs.writeFileSync(filePath, JSON.stringify(records, null, 2), 'utf-8');
            manifest.collections[name] = records.length;
            manifest.totalRecords += records.length;
            console.log(`  ✓ Backed up "${name}": ${records.length} records`);
        }

        fs.writeFileSync(path.join(targetFolder, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf-8');
        console.log(`\n🎉 Backup successfully completed!`);
        console.log(`📁 Destination: ${targetFolder}`);
        console.log(`📊 Total Records: ${manifest.totalRecords}`);

        // Retention Policy: Prune backups older than 7 days
        pruneOldBackups(BACKUPS_DIR, 7);

    } catch (err) {
        console.error('❌ Backup failed:', err.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
        console.log('🔌 Disconnected database connection.');
    }
};

const pruneOldBackups = (dir, retentionDays = 7) => {
    try {
        const files = fs.readdirSync(dir);
        const now = Date.now();
        const maxAgeMs = retentionDays * 24 * 60 * 60 * 1000;

        files.forEach(file => {
            const fullPath = path.join(dir, file);
            const stats = fs.statSync(fullPath);
            if (stats.isDirectory() && (now - stats.mtimeMs) > maxAgeMs) {
                console.log(`🧹 Pruning expired backup directory: ${file}`);
                fs.rmSync(fullPath, { recursive: true, force: true });
            }
        });
    } catch (err) {
        console.warn('⚠️ Warning during backup pruning:', err.message);
    }
};

createBackup();
