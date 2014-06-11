NOTE: AwsSum is now deprecated. Please use [aws-sdk](https://www.npmjs.org/package/aws-sdk) instead.

# awssum-amazon-emr #

This is an ```AwsSum``` plugin!

You'll need to add [awssum-amazon-emr](https://github.com/awssum/awssum-amazon-emr/) to your package.json
dependencies. Both [awssum](https://github.com/awssum/awssum/) and
[awssum-amazon](https://github.com/awssum/awssum-amazon/) are pulled in as peer dependencies.

## Example ##

Describe your job flows:

```
var fmt = require('fmt');
var amazonEmr = require('awssum-amazon-emr.js');

var emr = new amazonEmr.Emr({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonEmr.US_EAST_1,
});

emr.DescribeJobFlows(function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

(Ends)
