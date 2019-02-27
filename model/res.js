'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'message': 'succes',
        'values': values
    };
    res.json(data);
    res.end();
};

exports.err = function (values, res) {
    var data = {
        'status': 99,
        'message': 'error',
        'values': values
    };
    res.json(data);
    res.end();
};

exports.datanotfound = function (values, res) {
    var data = {
        'status': 14,
        'message': 'data not found',
        'values': (values ? values : 'data not found')
    };
    res.json(data);
    res.end();
};