import admin from "firebase-admin"; // imports lib from npm install

import serviceAccount  from './credentials.js' //import creds assign to variable    

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount) //create cert from creds
});

const db = admin.firestore(); 


const resCol = db.collection('restaurants')

//uiMyzb54yR62mX0IT6sd

resCol.doc('uiMyzb54yR62mX0IT6sd').delete()
.then(res => console.log('file deleted!'))
.catch(err => console.error(err))
