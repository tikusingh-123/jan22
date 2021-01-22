const os=require('os');
//tells the freememory as bytes(int)
console.log("os.freemem():  \n", os.freemem());
//to specify the homedirectory of the user
console.log("os.homedir():  \n", os.homedir());
//specifies host name
console.log("os.hostname():  \n", os.hostname());
//specifies the endianess (here le is the preferred endianess)
console.log("os.endianness():  \n", os.endianness());
//Returns an array containing the 1, 5, and 15 minute load averages.
//windows default is [0,0,0]
console.log("os.loadavg():  \n", os.loadavg());
//specifies the platform 
console.log("os.platform():  \n", os.platform());
//platform version
console.log("os.release():  \n", os.release());
//specifies the temp directory
console.log("os.tmpdir():  \n", os.tmpdir());
//total sys memory 
console.log("os.totalmem():  \n", os.totalmem());
//os type
console.log("os.type():  \n", os.type());
//uptime of the system
console.log("os.uptime():  \n", os.uptime());
