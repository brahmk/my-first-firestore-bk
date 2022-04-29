import admin from "firebase-admin"; // imports lib from npm install

import serviceAccount  from './credentials.js' //import creds assign to variable    

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount) //create cert from creds
});

const db = admin.firestore(); 

const resCol = db.collection('restaurants')


///can string together ANDS but not ORS on .where 


function getRest(key, comp, value){
resCol
.where(key, comp, value).get()
.then(snapshot =>  {
    snapshot.docs.forEach(doc =>{ //.docs is prop of snapshot object
        console.log(doc.data())
    }) 
    
})  
.catch(err => console.error(err))

}

getRest('cuisine', '==', 'pizza')