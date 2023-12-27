import express from 'express';
import mysql from 'mysql2/promise';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();
const port = 3000; // Choose a port for your server

// MySQL connection configuration
const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Straysaver1",
    database: "StraySaver_db"
});

// Set up Multer to handle file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

app.use('/uploads', express.static('uploads'));

// Middleware to parse incoming JSON requests
app.use(express.json());

// app.post('/submitRForm', upload.array('images'), async (req, res) => {
//     const formData = req.body;
//     const images = req.files.map(file => `/uploads/${file.filename}`);
//
//     try {
//         const sql = 'INSERT INTO reported_animals (location, image_name, image_data, needs) VALUES (?, ?, ?, ?)';
//         const values = [
//             formData.location,
//             formData.imageName,
//             formData.imageData,
//             formData.needs,
//             ];
//
//         const [result] = await db.execute(sql, values);
//     }
// }
export async function getAll() {}

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/submitForm', async (req, res) => {
    const formData = req.body;

    try {
        // Insert form data into the MySQL database
        const sql = 'INSERT INTO adoption_forms (first_name, last_name, email, phone_number, address, age, financial_status, reqanimalid) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
            formData.firstName,
            formData.lastName,
            formData.email,
            formData.phoneNumber,
            formData.address,
            formData.age,
            formData.financialStatus,
            formData.reqAnimalId,
        ];

        const [result] = await db.execute(sql, values);

        console.log('Form data inserted into MySQL:', result);
        res.json({ success: true, message: 'Form data submitted successfully' });
    } catch (error) {
        console.error('Error inserting data into MySQL:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});


app.post('/submitVForm', async (req, res) => {
    const formData = req.body;

    try {
        // Insert form data into the MySQL database
        const sql = 'INSERT INTO volunteering_forms (first_name, last_name, email, phone_number, address, age, reason) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [
            formData.firstName,
            formData.lastName,
            formData.email,
            formData.phoneNumber,
            formData.address,
            formData.age,
            formData.reason,
        ];


        const [result] = await db.execute(sql, values);

        console.log('Form data inserted into MySQL:', result);
        res.json({ success: true, message: 'Volunteering form submitted successfully' });
    } catch (error) {
        console.error('Error inserting data into MySQL:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
