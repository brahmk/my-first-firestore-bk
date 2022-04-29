import admin from "firebase-admin"; // imports lib from npm install

import serviceAccount  from './credentials.js' //import creds assign to variable    

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount) //create cert from creds
});

const db = admin.firestore(); 

const resCol = db.collection('restaurants')



const restaurant = {
    name: 'Mister 01',
    address: '555 N Federal Hwy',
    cuisine: 'pizza',
    rating: 4.9,
    phone: '(786) 677-2903'
}
resCol.add(restaurant)
.then(doc => console.log('Data Added! ', doc.id))
.catch(err => console.error(err))

const restaurant2 = {
    name: 'Bolay',
    address: '7015 Beracasa Way',
    cuisine: 'rice n stuff',
    rating: 4.1,
    phone: '(786) 591-3303' }

async function addData(data){
    try{
    const doc = await db.collection('restaurants').add(data)
    console.log('Data Added', doc.id) 
} catch(err){
    console.error(err)
}
}


resCol.where('cuisine', '==', 'pizza').get()
.then(snapshot =>  {
    snapshot.docs.forEach(doc =>{ //.docs is prop of snapshot object
        console.log(doc.data())
    })
    
})  
.catch(err => console.error(err))