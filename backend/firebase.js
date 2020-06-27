const admin = require('firebase-admin');
const serviceAccount = require("./firebase_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://instagram-b12cc.firebaseio.com"
});



module.exports = admin;