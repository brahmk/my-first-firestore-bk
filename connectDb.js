import admin from "firebase-admin"; // imports lib from npm install

import serviceAccount  from './credentials.js' //import creds assign to variable    

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount) //create cert from creds
});

 const db = admin.firestore(); 

export const resCol = db.collection('restaurants')