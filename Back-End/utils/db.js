import mysql from 'mysql'

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"spare_part_shop"
});

con.connect(function(err){
    if(err){
        console.log("Connection Error")
    } else {
        console.log("Connected")
    }
    
});

con.on('error', function(err) {
    console.error("MySQL error: ", err.message);
});


export default con;