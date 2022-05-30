// The OS Module allows you to retrieve information with the Operating Systems. This can be used 
// for such things as finding out the type of operating system, available memory or the hostname.

// Require statement for OS
const os = require('os');

// console statements to find out some information on operating system
// consoling the Platform type
console.log(`Platform: ${os.platform()}`);

// Adding blank line between consoles
console.log('');

// consoling the Architecture type
console.log(`Architecture: ${os.arch()}`);

// Adding blank line between consoles
console.log('');

// consoling the Hostname
console.log(`Hostname: ${os.hostname()}`);

// Adding blank line between consoles
console.log('');

// consoling the amount of Free Memory
console.log(`Free Memory: ${os.freemem}`);

// Adding blank line between consoles
console.log('');

// consoling the home directory
console.log(`Home Directory: ${os.homedir()}`);

// Adding blank line between consoles
console.log('');

// consoling out kernel version
console.log(`Kernel Version: ${os.version()}`)

// Adding blank line between consoles
console.log('');

// consoling out object array containting info on each logical CPU core
console.log(`Logical CPU Core Information: ${JSON.stringify(os.cpus())}`);

// Adding blank line between consoles
console.log('');

// consoling out Network Interface information
console.log(`Network Interface: ${JSON.stringify(os.networkInterfaces())}`);

