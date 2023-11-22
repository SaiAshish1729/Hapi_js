const mysql = require('mysql2');

const createConnection = () => {
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ashish1999$$',
        database: 'employee_db',
    });

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL: ' + err.stack);
            return;
        }
        console.log('Connected to MySQL as id ' + db.threadId);
    });

    return db;
};

module.exports = createConnection;
