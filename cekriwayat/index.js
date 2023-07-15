const functions = require('firebase-functions');
const fetch = require('node-fetch');

exports.fetchFromStorage = functions.https.onRequest((req, res) => {
  const fileURL = 'https://firebasestorage.googleapis.com/v0/b/medical-record-7557a.appspot.com/o/files%2F10_1.txt?alt=media&token=d2a4726e-7ad5-4dfe-9a59-80e722d0ba52'; // Ganti dengan URL file yang valid

  fetch(fileURL)
    .then(response => response.text())
    .then(data => {
      res.setHeader('Content-Type', 'text/plain');
      res.send(data);
    })
    .catch(error => {
      console.error('Error fetching file:', error);
      res.status(500).send('Error fetching file');
    });
});
