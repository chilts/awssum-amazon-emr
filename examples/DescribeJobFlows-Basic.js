var dump = require('./dump.js');
var amazonEmr = require('../awssum-amazon-emr.js');

var emr = new amazonEmr.Emr({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonEmr.US_EAST_1,
});

emr.DescribeJobFlows(function(err, data) {
    dump(err, 'err');
    dump(data, 'data');
});
