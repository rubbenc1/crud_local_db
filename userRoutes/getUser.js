const data = require('../data');

module.exports = (req, res) => {
    const id = parseInt(req.url.split('/')[2]);
    const success = data.getUserById(id);
    if(success){
        res.writeHead(200);
        res.end(JSON.stringify(success));
    }else {
        res.writeHead(404);
        res.end(JSON.stringify({message: "User not found"}));
    }
}