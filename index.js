


const admin = require("firebase-admin");

const serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const restaurant = {
    name: 'Mister 01',
    address: '555 N Federal Hwy',
    cuisine: 'pizza',
    rating: 4.9,
    phone: '(786) 677-2903'
}
// db.collection('restaurants').add(restaurant)
// .then(doc => console.log('Data Added! ', doc.id))
// .catch(err => console.error(err))

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

addData(restaurant2);