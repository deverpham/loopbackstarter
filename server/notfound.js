'use strict';
module.exports = function () {
    //4XX - URLs not found
    return function customRaiseUrlNotFoundError(req, res, next) {
        res.render('notfound');
    };
};
