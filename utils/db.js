import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nrcdashboard"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    }else {
        console.log("Connected")
    }
})

export default con;