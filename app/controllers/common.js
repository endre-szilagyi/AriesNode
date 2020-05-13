'use strict';

module.exports = {
    responseToJson,
    concatResponse
};


function responseToJson(prop) {
     return function (req, res, next) {
        res.json(res.resources[prop])
    }
}

function concatResponse(props) {
    let temp = [];
    console.log(props);
    return function (req, res, next) {
        props.forEach(prop => {
            temp = temp.concat(res.resources[prop])
        });
        res.resources.concated = temp;
        next()
    }
}
