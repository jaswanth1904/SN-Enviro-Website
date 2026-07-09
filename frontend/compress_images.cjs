const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets', 'life');
const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.jpg'));

(async () => {
    for (const file of files) {
        const filePath = path.join(dir, file);
        const tempPath = path.join(dir, 'temp_' + file);
        
        console.log(`Compressing ${file}...`);
        
        try {
            await sharp(filePath)
                .resize({ width: 800, withoutEnlargement: true }) // resize to 800px width
                .jpeg({ quality: 60 }) // compress jpeg quality
                .toFile(tempPath);
                
            // Replace original file with compressed file
            fs.unlinkSync(filePath);
            fs.renameSync(tempPath, filePath);
            console.log(`Successfully compressed ${file}`);
        } catch (err) {
            console.error(`Error compressing ${file}:`, err);
        }
    }
    console.log('All images compressed successfully!');
})();
