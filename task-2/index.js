const { exec } = require('child_process');
const fs = require('fs');
const os = require('os');

const logFileName = 'activityMonitor.log';

// checks is is window system os mac/unix
function getSystemCommand() {
    if (os.platform() === 'win32') {
        return 'powershell "Get-Process | Sort-Object CPU -Descending | Select-Object -Property Name, CPU, WorkingSet -First 1 | ForEach-Object { $_.Name + \' \' + $_.CPU + \' \' + $_.WorkingSet }"';
    } else {
        return 'ps -A -o %cpu,%mem,comm | sort -nr | head -n 1';
    }
}

// get the timestamp for the log file
function getCurrentTime() {
    return Math.floor(Date.now() / 1000);
}

// create the log file
function createFile(output = "") {
    const timeStamp = getCurrentTime()
    
    const outputMessage = `${timeStamp}: ${output}`

    fs.writeFile(logFileName, outputMessage , (err) => {
        if (err) throw err;
             });
}

// calls the corresponding command 

function execCommand() {
    
    const command = getSystemCommand();
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
        } else {
            const logMessage = `${stdout}\r`;

            // Write the new log message
            console.clear()
            process.stdout.write(logMessage);

            // Create or update the log file
            createFile(logMessage);
            
        }
    });
}

// Creates an interval to update information at a refresh rate of 10 times per second
function main() {
    const refreshRate = 100;
    setInterval(execCommand, refreshRate);
}

main()
