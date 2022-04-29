import {resCol} from './connectDb.js'

///can string together ANDS but not ORS on .where 
//when searching on one field w .where, automatically generates index
//when filtering on two different fields, index is required 

//go to firestore site and create index w GUI 

function getRest(key, comp, value){
resCol
.where(key, comp, value)
.get()
.then(snapshot =>  {
    snapshot.docs.forEach(doc =>{ //.docs is prop of snapshot object
        console.log(doc.data())
    }) 
    
})  
.catch(err => console.error(err))

}

getRest('cuisine', '==', 'pizza')




