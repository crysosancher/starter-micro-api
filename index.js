var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    let interval=05*60*1000
let i=0;
setInterval(async function(){
i++
    console.log("Hemlo checking my self",i)
    
}, interval);
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
