var express = require('express'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
    res.render('index', { title: 'Express' });
});

router.post('/sendmessage', function(req, res, next) 
{
    console.log("Recieved a post request");
    res.json(req.body);
});

router.post('/recordpost', (req, res, next) => 
{
    var Connection = require('tedious').Connection;  
    const date = require('date-and-time');
    var config = 
    {  
        server: 'wordofthedaydbserver.database.windows.net',  //update me
        authentication: 
        {
            type: 'default',
            options: 
            {
                userName: 'wordofthedayadmin', //update me
                password: 'Nine01090'  //update me
            }
        },
        options: 
        {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'wordofthedaydb',
            rowCollectionOnRequestCompletion: true
        }
    }; 
    var connection = new Connection(config);  
    connection.connect(function(err) 
    {  
        if(err) 
        {
            console.log('Error: ', err);
        }
        else
        {
            // If no error, then good to proceed.  
            console.log("Connected");  
            executeStatement();  
        }
    });  

    // connection.connect();

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  

    function executeStatement() 
    {  
        const now = new Date();
        request = new Request("INSERT INTO post_requests_recieved VALUES ('id35542', 'this is another body', '" + date.format(now,'YYYY-MM-DD HH:mm:ss') + "');", 
        function(err, rowCount, rows) 
        {  
            if (err) 
            {  
                console.log(err);
            }
        });  
        // // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
            res.json(req.body);
        });
        connection.execSql(request);  
    }
});

module.exports = router;
