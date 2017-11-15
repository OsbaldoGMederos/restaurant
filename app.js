    // app.js  
      
    var oracledb = require('oracledb');  
      
    oracledb.getConnection({  
         user: "osbaldo",  
         password: "admin",  
         connectString: "localhost/orcl"  
    }, function(err, connection) {  
         if (err) {  
              console.error(err.message);  
              return;  
         }  
         connection.execute( "SELECT * from platillo WHERE id < 156",  
         [],  
         function(err, result) {  
              if (err) {  
                   console.error(err.message);  
                   doRelease(connection);  
                   return;  
              }  
              console.log(result.metaData);  
              console.log(result.rows);  
              doRelease(connection);  
         });  
    });  
      
    function doRelease(connection) {  
         connection.release(  
              function(err) {  
                   if (err) {console.error(err.message);}  
              }  
         );  
    }  