const os = require('os');
const user = os.userInfo();
console.log(user);

//Get system uptime
console.log(`The suystem uptime is ${os.uptime()} seconds`);

const currentOS = {
    os: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);