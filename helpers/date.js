'use strict';

module.exports= {
    formattedDate,
};

function formattedDate() {
    const now = new Date();
    return `${now.getFullYear()}:${now.getMonth()}:${now.getDay()}`
}
