// Import the required modules
import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Straysaver1',
    database: 'StraySaver_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Function to display a table in the console
// Function to display a table in the console
// Function to display a table in the console
async function displayTable(tableName) {
    try {
        // Get a connection from the pool
        const connection = await pool.getConnection();

        try {
            // Get the column names for the specified table
            const [columns] = await connection.execute(`SHOW COLUMNS FROM ${tableName}`);
            const columnNames = columns.map(column => column.Field);

            // Perform the SQL query to select all data from the specified table
            const [rows] = await connection.execute(`SELECT * FROM ${tableName}`);

            // Display the table in the console
            console.log(`Table: ${tableName}`);
            console.table(rows.map(row => {
                const formattedRow = {};
                columnNames.forEach(columnName => {
                    formattedRow[columnName] = row[columnName];
                });
                return formattedRow;
            }));
        } finally {
            // Release the connection back to the pool
            connection.release();
        }
    } catch (error) {
        console.error(`Error retrieving data from ${tableName}:`, error);
    }
}



// Array of table names
const tables = [
    'Admin',
    'Organization',
    'User',
    'Animals',
    'Donation',
    'Volunteering',
    'Adoption',
    'Comment',
    'Reportation'
];

// Display tables for all the tables
for (const table of tables) {
    displayTable(table);
}