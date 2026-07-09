export const analyzerData = {
    // ----------------------------------------------------
    // CAAQMS
    // ----------------------------------------------------
    so2: {
        id: "so2",
        name: "Ambient Sulphur Dioxide (SO₂) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Measures trace sulfur dioxide using UV light excitation at 214nm, filtering out atmospheric interferents.",
        specs: [
            { label: "Principle", value: "Pulsed UV Fluorescence" },
            { label: "Measurement", value: "SO₂ in Ambient Air" },
            { label: "Display", value: "LCD" },
            { label: "Ranges", value: "Auto ranging 0 - 200 ppb" },
            { label: "Lower Detectable Limit", value: "1 ppb" },
            { label: "Noise Level", value: "0.5 ppb" },
            { label: "Zero Drift", value: "< 1 ppb/24 Hrs. with automatic zero compensation" },
            { label: "Span Drift", value: "<1 ppb in 24 hrs." },
            { label: "Linearity", value: "± 1% of full scale" },
            { label: "Response Time", value: "120 sec or less" },
            { label: "Span check facility", value: "Built in permeation bench (as an option)" },
            { label: "Calibration", value: "Through multigas and the multiport calibrator and the Zero Air generator" },
            { label: "Analog Output", value: "4-20ma" },
            { label: "Communication", value: "Rs322, Ethernet and Rs485" }
        ]
    },
    nox: {
        id: "nox",
        name: "Ambient Oxides of Nitrogen (NO-NO₂-NOx) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Measures nitric oxide and nitrogen oxides through the light-emitting reaction of NO with ozone.",
        specs: [
            { label: "Principle", value: "Chemiluminiscence" },
            { label: "Measurement", value: "NO-NO₂-NOx in Ambient Air" },
            { label: "Display", value: "LCD" },
            { label: "Ranges", value: "Auto ranging 0-2000 ppb" },
            { label: "Lower Detectable Limit", value: "1 ppb" },
            { label: "Noise Level", value: "0.5 ppb" },
            { label: "Zero Drift", value: "< 1 ppb/24 Hrs." },
            { label: "Span Drift", value: "< 2% in 15 days of full scale" },
            { label: "Linearity", value: "± 1% of full scale" },
            { label: "Response Time", value: "120 sec or less" },
            { label: "Span check facility", value: "Built in permeation bench (as an option)" },
            { label: "Calibration", value: "Through multigas and the multiport calibrator and the Zero Air generator" },
            { label: "Analog Output", value: "4-20ma" },
            { label: "Communication", value: "Rs322, Ethernet and Rs485" }
        ]
    },
    nh3: {
        id: "nh3",
        name: "Ambient Ammonia (NH₃) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Measures ambient ammonia using chemical conversion and subsequent chemiluminescence.",
        specs: [
            { label: "Principle", value: "Chemiluminiscence (NH₃ conversion to NO by oxidation. NO₂ also converted to NO. The difference obtained by measuring NO in output of two sample stream is equal to NH₃)" },
            { label: "Measurement", value: "NH₃ in Ambient Air" },
            { label: "Display", value: "LCD" },
            { label: "Ranges", value: "Auto ranging 0-1000 ppb" },
            { label: "Lower Detectable Limit", value: "1 ppb" },
            { label: "Noise Level", value: "0.2% of reading" },
            { label: "Zero Drift", value: "< 5 ppb /24 Hrs." },
            { label: "Span Drift", value: "< 2% in 15 days of full scale" },
            { label: "NH3/NO converter", value: "Quartz at approx. 1000°C" },
            { label: "Linearity", value: "± 1% of full scale" },
            { label: "Response time", value: "180 second" },
            { label: "Rise / fall Time", value: "< 30 Sec (95% of the final value)" },
            { label: "Span check facility", value: "Built in permeation bench (as an option)" },
            { label: "Calibration", value: "Through multigas and the multiport calibrator and the Zero Air generator" },
            { label: "Analog Output", value: "4-20ma" },
            { label: "Communication", value: "Rs322, Ethernet and Rs485" }
        ]
    },
    co: {
        id: "co",
        name: "Ambient Carbon Monoxide (CO) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Utilizes gas filter correlation spectroscopy to eliminate carbon dioxide and water vapor interference.",
        specs: [
            { label: "Principle", value: "Non Dispersive Infra-Red (NDIR) with Gas Filter Correlation" },
            { label: "Measurement", value: "CO in Ambient Air" },
            { label: "Display", value: "LCD" },
            { label: "Ranges", value: "Auto ranging 0 - 100 ppm" },
            { label: "Lower Detectable Limit", value: "0.1 ppm" },
            { label: "Noise Level", value: "0.05 ppm with time constant 30 seconds" },
            { label: "Zero Drift", value: "< 0.2 ppm/7 days" },
            { label: "Span Drift", value: "< 1% full scale in 24 hrs." },
            { label: "Linearity", value: "Continuous ± 1%" },
            { label: "Response Time", value: "30 seconds or less" },
            { label: "Span check facility", value: "Built in permeation bench (as an option)" },
            { label: "Calibration", value: "Through multigas and the multiport calibrator and the Zero Air generator" },
            { label: "Analog Output", value: "4-20ma" },
            { label: "Communication", value: "Rs322, Ethernet and Rs485" }
        ]
    },
    o3: {
        id: "o3",
        name: "Ambient Ozone (O₃) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Measures absorption of UV light at 254nm within a dual-path cell to compute ground-level ozone.",
        specs: [
            { label: "Principle", value: "UV Photometric / Chemiluminiscence" },
            { label: "Measurement", value: "O₃ in Ambient Air" },
            { label: "Display", value: "LCD" },
            { label: "Range", value: "Auto ranging 0 - 500 ppb" },
            { label: "Lower Detectable Limit", value: "1.0 ppb" },
            { label: "Noise level", value: "± 0.5 ppb" },
            { label: "Zero Drift", value: "< ½% per month" },
            { label: "Span Drift", value: "< 1% per month" },
            { label: "Linearity", value: "Continuous ± 1%" },
            { label: "Response Time", value: "30 seconds or less" },
            { label: "Span check facility", value: "Built in permeation bench (as an option)" },
            { label: "Calibration", value: "Through multigas and the multiport calibrator and the Zero Air generator" },
            { label: "Analog Output", value: "4-20ma" },
            { label: "Communication", value: "Rs322, Ethernet and Rs485" }
        ]
    },
    pm: {
        id: "pm",
        name: "Continuous Particulate Matter (PM10 & PM2.5) Monitor",
        category: "CAAQMS Reference Analyzer",
        desc: "Provides continuous mass measurement of particulate fractions using Beta Ray Attenuation (BAM).",
        specs: [
            { label: "Principle", value: "Beta Ray Attenuation (Carbon-14 Source)" },
            { label: "Measurement", value: "PM10 and PM2.5 in Ambient Air" },
            { label: "Display", value: "LCD" },
            { label: "Range", value: "0 - 1000 µg/m³ or 0 - 10000 µg/m³" },
            { label: "Resolution", value: "0.1 µg/m³" },
            { label: "Filter Tape", value: "Glass fiber filter tape, continuous spool" },
            { label: "Flow Rate", value: "16.7 Liters/Minute (Volumetric controlled)" },
            { label: "Zero Drift", value: "< 2 µg/m³ per 24 hours" },
            { label: "Span Drift", value: "< 2% per month" },
            { label: "Span check facility", value: "Built in permeation bench (as an option)" },
            { label: "Calibration", value: "Through multigas and the multiport calibrator and the Zero Air generator" },
            { label: "Compliance", value: "US EPA Equivalent Method / EN 16450" },
            { label: "Analog Output", value: "4-20ma" },
            { label: "Communication", value: "Rs322, Ethernet and Rs485" }
        ]
    },

    // ----------------------------------------------------
    // CEMS
    // ----------------------------------------------------
    cems_so2: {
        id: "cems_so2",
        name: "CEMS SO₂-NO-NO₂ (UV-DOAS) Analyzer",
        category: "Continuous Emission Monitoring System",
        desc: "Utilizes Differential UV Optical Absorption Spectroscopy to accurately measure SO2 and NOx without water vapor or CO2 interference.",
        specs: [
            { label: "Principle", value: "UV-DOAS (Differential Optical Absorption Spectroscopy)" },
            { label: "Measured Gases", value: "SO₂, NO, NO₂ (Simultaneous)" },
            { label: "Range (SO₂)", value: "0-50 / 0-1000 ppm (Configurable)" },
            { label: "Range (NOx)", value: "0-50 / 0-1000 ppm (Configurable)" },
            { label: "Accuracy", value: "± 1.0% Full Scale" },
            { label: "Zero/Span Drift", value: "< 2% Full Scale per week" },
            { label: "Linearity", value: "± 1% Full Scale" },
            { label: "Response Time", value: "< 10 Seconds (T90)" },
            { label: "Gas Cell", value: "Heated multi-pass optical cell (to avoid condensation)" },
            { label: "Calibration", value: "Automatic remote zero/span calibration via solenoid" },
            { label: "Analog Output", value: "Isolated 4 – 20 mA per channel" },
            { label: "Digital Output", value: "RS-485 Modbus RTU, Ethernet" }
        ]
    },
    cems_co: {
        id: "cems_co",
        name: "CEMS CO / CO₂ Analyzer",
        category: "Continuous Emission Monitoring System",
        desc: "Employs an NDIR optical absorption cell for continuous tracking of combustion and carbon emissions.",
        specs: [
            { label: "Principle", value: "Non-Dispersive Infrared (NDIR)" },
            { label: "Measured Gases", value: "CO and CO₂" },
            { label: "Range (CO)", value: "0-1000 / 5000 ppm" },
            { label: "Range (CO₂)", value: "0-20% / 0-50% Vol" },
            { label: "Accuracy", value: "± 1.0% Full Scale" },
            { label: "Zero Drift", value: "< ±1% FS / week" },
            { label: "Span Drift", value: "< ±2% FS / week" },
            { label: "Response Time", value: "< 15 Seconds (T90)" },
            { label: "Cross Sensitivity", value: "Negligible (Utilizes gas filter correlation)" },
            { label: "Analog Output", value: "4 – 20 mA" },
            { label: "Digital Output", value: "RS-485 Modbus RTU" }
        ]
    },
    cems_o2: {
        id: "cems_o2",
        name: "CEMS Oxygen (O₂) Analyzer",
        category: "Continuous Emission Monitoring System",
        desc: "Measures residual oxygen in flue gas to normalize other pollutant concentrations to the reference oxygen level.",
        specs: [
            { label: "Principle", value: "Electrochemical / Zirconia Dioxide" },
            { label: "Measured Gas", value: "Oxygen (O₂)" },
            { label: "Range", value: "0 - 25% Vol" },
            { label: "Accuracy", value: "± 0.1% Absolute" },
            { label: "Drift", value: "< ±1% FS / month" },
            { label: "Response Time", value: "< 5 Seconds (T90)" },
            { label: "Operating Temp", value: "Up to 600°C (In-situ Zirconia) or Ambient (Extractive)" },
            { label: "Calibration", value: "Ambient air for Span (20.9%)" },
            { label: "Output", value: "4 – 20 mA, RS-485" }
        ]
    },
    cems_pm: {
        id: "cems_pm",
        name: "In-Situ PM Opacity Monitor",
        category: "Continuous Emission Monitoring System",
        desc: "Cross-stack optical transceiver measuring flue gas turbidity, opacity, and particulate concentrations.",
        specs: [
            { label: "Principle", value: "Laser Backscattering / Transmissometry" },
            { label: "Measurement", value: "Particulate Matter (Dust/Opacity) in Stack" },
            { label: "Range", value: "0 - 100 / 0 - 1000 mg/m³" },
            { label: "Path Length", value: "0.5m to 15m (Cross-stack)" },
            { label: "Accuracy", value: "± 2% of measurement" },
            { label: "Lens Cleaning", value: "Continuous automatic air-purge (requires instrument air)" },
            { label: "Flue Gas Temp", value: "Up to 500°C (Higher options available)" },
            { label: "Compliance", value: "US EPA PS-1 / EN 15267" },
            { label: "Output", value: "4 – 20 mA, Modbus RS-485" }
        ]
    },
    cems_flow: {
        id: "cems_flow",
        name: "Flue Gas Flow, Temp & Pressure Monitor",
        category: "Continuous Emission Monitoring System",
        desc: "Measures stack gas velocity, pressure, and temperature to calculate total volumetric emission rate.",
        specs: [
            { label: "Principle", value: "S-Type Pitot Tube / Ultrasonic Time-of-Flight" },
            { label: "Measurements", value: "Velocity, Temperature, Static Pressure" },
            { label: "Velocity Range", value: "0 - 40 m/s" },
            { label: "Temperature Range", value: "0 - 600°C (PT100/Thermocouple)" },
            { label: "Accuracy", value: "± 2% Full Scale" },
            { label: "Purging", value: "Automatic programmable blow-back to prevent clogging" },
            { label: "Material", value: "SS316L / Hastelloy for corrosive stacks" },
            { label: "Analog Output", value: "Isolated 4 – 20 mA (x3)" },
            { label: "Digital Output", value: "RS-485 Modbus" }
        ]
    },

    // ----------------------------------------------------
    // EQMS
    // ----------------------------------------------------
    eqms_ph: {
        id: "eqms_ph",
        name: "Industrial pH/ORP Sensor",
        category: "Effluent Quality Monitoring System",
        desc: "Digital electrochemical sensor with a self-cleaning flat glass surface and internal reference standard for harsh effluents.",
        specs: [
            { label: "Principle", value: "Potentiometric Glass Electrode" },
            { label: "Measurement", value: "pH and ORP in Wastewater" },
            { label: "Range", value: "0 - 14 pH, ± 2000 mV (ORP)" },
            { label: "Accuracy", value: "± 0.1 pH" },
            { label: "Resolution", value: "0.01 pH" },
            { label: "Temperature Comp.", value: "Built-in PT1000 for automatic compensation" },
            { label: "Body Material", value: "PPS / Ryton (Highly chemical resistant)" },
            { label: "Cleaning Mechanism", value: "Optional air/water jet nozzle or wiper" },
            { label: "Ingress Protection", value: "IP68 Fully Submersible" },
            { label: "Output", value: "Digital RS-485 Modbus directly from sensor" }
        ]
    },
    eqms_cod: {
        id: "eqms_cod",
        name: "Optical COD/BOD Analyzer",
        category: "Effluent Quality Monitoring System",
        desc: "UV-Vis reagent-free spectrophotometer measuring organic loading at 254nm without consuming chemicals.",
        specs: [
            { label: "Principle", value: "UV-Visible Spectrophotometry (254nm & 550nm compensation)" },
            { label: "Measurements", value: "COD, BOD (Derived), TOC (Derived)" },
            { label: "Range (COD)", value: "0 - 1000 mg/L or 0 - 5000 mg/L (Pathlength dependent)" },
            { label: "Accuracy", value: "± 5% of reading (Matrix dependent)" },
            { label: "Response Time", value: "< 30 Seconds" },
            { label: "Reagents Required", value: "None (Zero chemicals required)" },
            { label: "Cleaning Mechanism", value: "Automatic nano-coated mechanical wiper or air blast" },
            { label: "Light Source", value: "Long-life Xenon Flash / UV LED" },
            { label: "Ingress Protection", value: "IP68 Submersible or Flow-cell bypass" },
            { label: "Output", value: "RS-485 Modbus, 4-20mA via controller" }
        ]
    },
    eqms_tss: {
        id: "eqms_tss",
        name: "Total Suspended Solids (TSS) Sensor",
        category: "Effluent Quality Monitoring System",
        desc: "Infrared light-scattering sensor measuring total suspended solids with built-in scratching wiper.",
        specs: [
            { label: "Principle", value: "90° or 135° Infrared scattered light (ISO 7027)" },
            { label: "Measurement", value: "Total Suspended Solids (TSS) / Turbidity" },
            { label: "Range", value: "0 - 4000 mg/L (TSS) or 0 - 4000 NTU (Turbidity)" },
            { label: "Accuracy", value: "± 3% of reading" },
            { label: "Wavelength", value: "860 nm Near-Infrared LED" },
            { label: "Cleaning Mechanism", value: "Automatic internal mechanical wiper" },
            { label: "Body Material", value: "Stainless Steel 316L / Titanium option" },
            { label: "Ingress Protection", value: "IP68 (Up to 10 bars pressure)" },
            { label: "Output", value: "Digital RS-485 Modbus" }
        ]
    },
    eqms_flow: {
        id: "eqms_flow",
        name: "Effluent Electromagnetic Flow Meter",
        category: "Effluent Quality Monitoring System",
        desc: "Obstruction-less flow sensor measuring discharge velocity and volume with CPCB-compliant totalizer.",
        specs: [
            { label: "Principle", value: "Faraday's Law of Electromagnetic Induction" },
            { label: "Measurement", value: "Flow Velocity, Instantaneous Flow Rate, Cumulative Totalizer" },
            { label: "Line Size (DN)", value: "DN15 to DN2000 Flanged" },
            { label: "Velocity Range", value: "0.1 to 10 m/s" },
            { label: "Accuracy", value: "± 0.5% of measured value" },
            { label: "Lining Material", value: "PTFE / Hard Rubber (Chemically resistant)" },
            { label: "Electrode Material", value: "SS316L / Hastelloy C / Titanium" },
            { label: "Display", value: "LCD Display with built-in Totalizer memory (EEPROM)" },
            { label: "Output", value: "4-20mA, Pulse output, RS-485 Modbus RTU" }
        ]
    },

    // ----------------------------------------------------
    // IIoT & GATEWAYS
    // ----------------------------------------------------
    iiot_gateway: {
        id: "iiot_gateway",
        name: "Modbus/Analog IIoT Gateway Logger",
        category: "IIoT Telemetry & Datalogging",
        desc: "Central IIoT logger polling analog (4-20mA) and Modbus RTU channels simultaneously to buffer and transmit to the cloud.",
        specs: [
            { label: "Processor", value: "32-bit ARM Cortex Industrial MCU" },
            { label: "Analog Inputs", value: "8 x 4-20mA or 0-5V (Isolated)" },
            { label: "Digital Inputs/Outputs", value: "8 x DI, 4 x DO (Relay/Open Collector)" },
            { label: "Serial Ports", value: "2 x RS-485 (Modbus RTU Master/Slave), 1 x RS-232" },
            { label: "Storage", value: "Internal Flash + 16GB MicroSD (Can buffer > 5 years data)" },
            { label: "Connectivity", value: "4G/LTE Cellular, 10/100 Ethernet, Wi-Fi" },
            { label: "Protocols", value: "MQTT, HTTP/HTTPS POST, FTP, Modbus TCP" },
            { label: "Mounting", value: "35mm DIN-Rail" },
            { label: "Power Supply", value: "12 - 24V DC" }
        ]
    },
    iiot_cal: {
        id: "iiot_cal",
        name: "Remote Calibration Control Module",
        category: "IIoT Telemetry & Datalogging",
        desc: "RCU gateway triggered via cloud to execute zero/span check validation sequences for regulatory compliance.",
        specs: [
            { label: "Trigger Mechanism", value: "Secure Cloud API Call / Scheduled Cron Job" },
            { label: "Control Relays", value: "4 x SPDT 5A/250VAC (For Zero, Span, Blowback solenoids)" },
            { label: "Feedback Loop", value: "Monitors flow switch and pressure sensors for gas lines" },
            { label: "Security", value: "Hardware Watchdog Timer, SSL/TLS Auth" },
            { label: "Interfacing", value: "Integrates with main IIoT gateway over local RS-485" },
            { label: "Mounting", value: "35mm DIN-Rail" },
            { label: "Power Supply", value: "24V DC" }
        ]
    },
    iiot_mqtt: {
        id: "iiot_mqtt",
        name: "MQTT Encryption Server Link",
        category: "IIoT Telemetry & Datalogging",
        desc: "Direct SSL/TLS client module pushing encrypted JSON files directly to central regulatory servers (CPCB/SPCB).",
        specs: [
            { label: "Security Protocol", value: "SSL/TLS v1.2 / v1.3" },
            { label: "Data Format", value: "Encrypted JSON payload customized to CPCB structure" },
            { label: "Buffering Logic", value: "Automatic Historical Backfill (transmits lost packets sequentially on reconnect)" },
            { label: "Encryption", value: "AES-256 Bit Encryption" },
            { label: "Authentication", value: "Client Certificates / Username + Password" },
            { label: "Diagnostics", value: "Network strength logging, Server ACK logging" }
        ]
    },

    // ----------------------------------------------------
    // WMS
    // ----------------------------------------------------
    wms_wind: {
        id: "wms_wind",
        name: "Ultrasonic Wind Sensor",
        category: "Weather Monitoring System",
        desc: "Solid-state sensor measuring wind speed and direction with no moving parts, avoiding mechanical wear and inertia.",
        specs: [
            { label: "Principle", value: "Ultrasonic Time-of-Flight difference" },
            { label: "Measurement", value: "Wind Speed, Wind Direction, Virtual Temp" },
            { label: "Wind Speed Range", value: "0 - 60 m/s" },
            { label: "Wind Speed Accuracy", value: "± 2% or 0.3 m/s" },
            { label: "Wind Direction Range", value: "0 - 359°" },
            { label: "Wind Direction Accuracy", value: "± 2°" },
            { label: "Starting Threshold", value: "0.01 m/s (Extremely low compared to mechanical cups)" },
            { label: "Heating", value: "Optional internal heater to prevent icing" },
            { label: "Material", value: "Anodized Aluminum / UV stabilized plastic" },
            { label: "Output", value: "RS-485 (NMEA / Modbus), SDI-12" }
        ]
    },
    wms_temp: {
        id: "wms_temp",
        name: "Ambient Temp & Humidity Sensor",
        category: "Weather Monitoring System",
        desc: "Capacitive humidity and high-accuracy RTD temperature sensor housed inside a naturally ventilated solar radiation shield.",
        specs: [
            { label: "Temp Principle", value: "PT100 Class A / Semiconductor" },
            { label: "Temp Range", value: "-40°C to +60°C" },
            { label: "Temp Accuracy", value: "± 0.2°C" },
            { label: "Humidity Principle", value: "Thin-film Capacitive Polymer" },
            { label: "Humidity Range", value: "0 - 100% RH" },
            { label: "Humidity Accuracy", value: "± 2% RH" },
            { label: "Shielding", value: "Multi-plate louvered radiation shield (Anti-UV)" },
            { label: "Output", value: "RS-485 Modbus or 4-20mA" }
        ]
    },
    wms_rain: {
        id: "wms_rain",
        name: "Tipping Bucket Rain Gauge",
        category: "Weather Monitoring System",
        desc: "High-precision tipping bucket mechanism for tracking rainfall rates and accumulation.",
        specs: [
            { label: "Principle", value: "Mechanical Tipping Bucket / Reed Switch" },
            { label: "Orifice Diameter", value: "200mm (WMO standard)" },
            { label: "Resolution", value: "0.2 mm or 0.5 mm per tip" },
            { label: "Accuracy", value: "± 2% at up to 25mm/hr" },
            { label: "Max Rainfall Rate", value: "500 mm/hr" },
            { label: "Material", value: "Powder-coated aluminum funnel and body" },
            { label: "Filter", value: "Stainless steel mesh to prevent leaf blockage" },
            { label: "Output", value: "Pulse (Dry contact relay)" }
        ]
    },
    wms_pyrano: {
        id: "wms_pyrano",
        name: "Pyranometer (Solar Radiation)",
        category: "Weather Monitoring System",
        desc: "Thermopile sensor measuring incoming shortwave solar radiation, critical for atmospheric dispersion classes.",
        specs: [
            { label: "Principle", value: "Thermopile (Blackened sensing surface)" },
            { label: "Measurement", value: "Global Horizontal Irradiance (GHI)" },
            { label: "Spectral Range", value: "300 to 2800 nm" },
            { label: "Range", value: "0 - 2000 W/m²" },
            { label: "Response Time", value: "< 18 seconds (95%)" },
            { label: "Class", value: "ISO 9060 Second Class / First Class" },
            { label: "Dome", value: "Single/Double Glass Dome to prevent convection errors" },
            { label: "Output", value: "Microvolts per W/m², Modbus RS-485" }
        ]
    },
    wms_baro: {
        id: "wms_baro",
        name: "Barometric Pressure Sensor",
        category: "Weather Monitoring System",
        desc: "High-stability piezoresistive pressure sensor for ambient atmospheric tracking.",
        specs: [
            { label: "Principle", value: "Piezoresistive Silicon Transducer" },
            { label: "Measurement", value: "Absolute Atmospheric Pressure" },
            { label: "Range", value: "500 to 1100 hPa (mbar)" },
            { label: "Accuracy", value: "± 0.3 hPa @ 20°C" },
            { label: "Resolution", value: "0.1 hPa" },
            { label: "Long Term Stability", value: "± 0.1 hPa per year" },
            { label: "Temperature Comp.", value: "Internal DSP compensation (-40 to +60°C)" },
            { label: "Output", value: "RS-485 Modbus, SDI-12" }
        ]
    },

    // ----------------------------------------------------
    // SMART CITY
    // ----------------------------------------------------
    smart_gas: {
        id: "smart_gas",
        name: "Smart City Compact Gas Node",
        category: "Smart City IoT Network",
        desc: "Houses micro-electrochemical sensors measuring ambient CO, NO2, SO2, and Ozone with algorithmic compensation.",
        specs: [
            { label: "Principle", value: "Amperometric Electrochemical Cells" },
            { label: "Parameters", value: "NO₂, SO₂, CO, O₃, H₂S (Selectable up to 4)" },
            { label: "Range", value: "Low ppb ranges tailored for ambient conditions" },
            { label: "Accuracy", value: "± 10% (Indicative/Trend mapping)" },
            { label: "Compensation", value: "Algorithmic T/RH cross-sensitivity correction" },
            { label: "Sensor Life", value: "18 - 24 months (Replaceable modules)" },
            { label: "Telemetry", value: "Built-in 4G/LTE / LoRaWAN" },
            { label: "Power", value: "12V DC / Integrated Micro-Solar Panel" },
            { label: "Enclosure", value: "IP65 Weatherproof ABS/Polycarbonate" }
        ]
    },
    smart_pm: {
        id: "smart_pm",
        name: "Smart City Compact PM Node",
        category: "Smart City IoT Network",
        desc: "Miniature laser-scattering particle counter estimating PM10 and PM2.5 mass concentrations in real-time.",
        specs: [
            { label: "Principle", value: "Laser Light Scattering (Optical Particle Counter)" },
            { label: "Parameters", value: "PM1.0, PM2.5, PM10" },
            { label: "Range", value: "0 - 1000 µg/m³" },
            { label: "Resolution", value: "1 µg/m³" },
            { label: "Sampling", value: "Internal micro-fan" },
            { label: "Heating", value: "Optional inlet heater to prevent moisture mistaking as particles" },
            { label: "Calibration", value: "Factory calibrated against BAM reference" },
            { label: "Maintenance", value: "Requires periodic optics cleaning (3-6 months)" },
            { label: "Integration", value: "Combines into the main Gas Node unit" }
        ]
    },
    smart_noise: {
        id: "smart_noise",
        name: "Urban Noise Level Sensor",
        category: "Smart City IoT Network",
        desc: "Integrated weatherproof decibel meter measuring ambient urban environmental noise level and peaks.",
        specs: [
            { label: "Principle", value: "Electret Condenser Microphone" },
            { label: "Measurement", value: "dB(A) and dB(C) Frequency Weighting" },
            { label: "Time Weighting", value: "Fast (125ms) and Slow (1s)" },
            { label: "Range", value: "30 to 130 dB" },
            { label: "Accuracy", value: "± 1.5 dB (Type 2 / Class 2 equivalent)" },
            { label: "Frequency Range", value: "20 Hz to 12.5 kHz" },
            { label: "Protection", value: "Foam windscreen and weatherproof bird-spike guard" },
            { label: "Output", value: "RS-485 Modbus / I2C" }
        ]
    },

    // ----------------------------------------------------
    // ADVANCED INSTRUMENTATION
    // ----------------------------------------------------
    adv_flow: {
        id: "adv_flow",
        name: "Process Electromagnetic Flow Meter",
        category: "Advanced Process Instrumentation",
        desc: "High-accuracy flanged flow sensor for pipelines measuring pressurized water, chemicals, and slurries.",
        specs: [
            { label: "Principle", value: "Electromagnetic Induction" },
            { label: "Application", value: "Conductive liquids (>5 µS/cm)" },
            { label: "Line Size", value: "DN15 to DN2000" },
            { label: "Accuracy", value: "± 0.2% to 0.5% of measured value" },
            { label: "Process Pressure", value: "Up to PN40 (40 Bar)" },
            { label: "Lining Options", value: "PTFE, Neoprene, Hard Rubber, Polyurethane" },
            { label: "Transmitter", value: "Remote or Integral mounting" },
            { label: "Output", value: "4-20mA HART, Pulse, Foundation Fieldbus" }
        ]
    },
    adv_radar: {
        id: "adv_radar",
        name: "Radar Level Transmitter",
        category: "Advanced Process Instrumentation",
        desc: "Non-contact FMCW radar transmitter for high-accuracy bulk storage tank level tracking.",
        specs: [
            { label: "Principle", value: "80 GHz FMCW (Frequency Modulated Continuous Wave)" },
            { label: "Application", value: "Liquids, Slurries, and Bulk Solids" },
            { label: "Range", value: "Up to 30m / 120m (Antenna dependent)" },
            { label: "Accuracy", value: "± 1 mm to 2 mm" },
            { label: "Beam Angle", value: "As narrow as 3° (Ignores internal tank obstructions)" },
            { label: "Process Temp", value: "-40°C to +200°C" },
            { label: "Antenna Material", value: "PTFE drop antenna or Stainless Steel Horn" },
            { label: "Output", value: "2-wire 4-20mA HART, Profibus PA" }
        ]
    },
    adv_pressure: {
        id: "adv_pressure",
        name: "Smart Pressure Transmitter",
        category: "Advanced Process Instrumentation",
        desc: "Stainless steel pressure sensor measuring differential, gauge, or absolute process pressures in hazardous zones.",
        specs: [
            { label: "Principle", value: "Piezoresistive / Capacitive sensor cell" },
            { label: "Measurement", value: "Gauge (Relative), Absolute, Differential Pressure" },
            { label: "Range", value: "10 mBar up to 400 Bar (Configurable spans)" },
            { label: "Accuracy", value: "± 0.05% of calibrated span" },
            { label: "Diaphragm Material", value: "SS316L, Hastelloy C, Tantalum, Gold-plated" },
            { label: "Fill Fluid", value: "Silicone oil / Inert oil" },
            { label: "Display", value: "Backlit LCD with local push-button configuration" },
            { label: "Certifications", value: "ATEX/IECEx Explosion Proof (Ex d), Intrinsically Safe (Ex ia)" },
            { label: "Output", value: "4-20mA HART protocol" }
        ]
    },
    adv_electrodes: {
        id: "adv_electrodes",
        name: "Analytical Process Electrodes",
        category: "Advanced Process Instrumentation",
        desc: "High-precision inline analytical sensors for critical chemical processes (DO, Conductivity, Free Chlorine).",
        specs: [
            { label: "Parameters Available", value: "Dissolved Oxygen (DO), Conductivity, Chlorine, ORP, pH" },
            { label: "DO Principle", value: "Optical Luminescence / Amperometric" },
            { label: "Conductivity Principle", value: "Toroidal (Inductive) or Contacting (2/4 pole)" },
            { label: "Process Temp Range", value: "Up to 130°C (Sterilizable in place)" },
            { label: "Process Pressure", value: "Up to 10 Bar" },
            { label: "Fittings", value: "PG13.5 thread, Tri-Clamp, NPT" },
            { label: "Output", value: "Direct Modbus or via Multi-channel transmitter" }
        ]
    }
};
