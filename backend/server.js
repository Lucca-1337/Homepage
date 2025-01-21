import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const port = 3001; // Ein Port, der nicht mit dem Vite-Server kollidiert

// CORS aktivieren
app.use(cors());
app.use(express.json()); // Um JSON-Daten im Request-Body zu verarbeiten

// Verbindung zur Datenbank herstellen (optional)
const connection = mysql.createConnection({
    host: '85.214.12.194',    // z.B. 'localhost' oder deine Datenbank-IP
    user: 'contact_admin',
    password: 'Gianlucca12092004',
    database: 'contact_messages',
});

connection.connect((err) => {
    if (err) {
        console.error('Datenbankverbindung fehlgeschlagen:', err.stack);
        return;
    }
    console.log('Mit der Datenbank verbunden');
});

// Beispiel - Route für die GET - Anfrage
app.get('/api/message', (req, res) => {
    connection.query('SELECT * FROM message', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Fehler bei der Abfrage' });
        }
        res.json(results);
    });
});

app.post('/api/send_message', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Hier würdest du normalerweise die Daten in einer Datenbank speichern
    console.log(`Kontakt erhalten: ${name}, ${email}, ${subject}, ${message}`);
    connection.query('INSERT INTO message (name, email, subject, message) VALUES (?, ?, ?, ?)', [name, email, subject, message], (err, results) => {
        if (err) {
            console.error('Fehler beim Speichern der Nachricht:', err);
            return;
        }
        console.log('Nachricht erfolgreich gespeichert');
    });

});



// Server starten
app.listen(port, () => {
    console.log(`Backend läuft auf http://localhost:${port}`);
});
