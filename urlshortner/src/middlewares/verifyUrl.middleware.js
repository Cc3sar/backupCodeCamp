const dns = require('dns');
const url = require('url');


const verifyUrl = (req, res, next) => {
    /* const checkUrl = req.body.url.split(".");

    console.log(checkUrl);
    
    if(checkUrl[0] !== "http://www" && checkUrl[2] !== "com") {
        return res.json({ error: 'invalid url' })
    };

    next(); */
    
    const bodyUrl = req.body.url;

    const somethingUrl = dns.lookup(url.parse(bodyUrl).hostname,
    (error, address) => {
        if(!address) {
            return res.json({ error: "invalid url" });
        } else {
            next();
        }
    })
};

export default verifyUrl;