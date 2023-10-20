const os = require("os");

// info about current user
// const user = os.availableParallelism();
console.log(user);

// getting the system's up time in seconds
console.log(`The system up time is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(), //system type
  userInfo: os.userInfo(), //the system user information
  release: os.release(), //system release number
  totalMem: os.totalmem(), //system total memory
  freeMem: os.freemem(), // system free memory
};

console.log(currentOs);
