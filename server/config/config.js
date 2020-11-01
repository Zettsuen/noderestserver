// =========================
// Port
// =========================

process.env.PORT = process.env.PORT || 3000;

// =========================
// Entorno
// =========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =========================
// Base de datos
// =========================

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = "mongodb+srv://cafe-user:OyE9nuTA0oIrCWtz@cluster0.tzhws.mongodb.net/cafe?retryWrites=true&w=majority";
}

process.env.URLDB = urlDB;