import {resCol} from './connectDb'
//uiMyzb54yR62mX0IT6sd

resCol.doc('uiMyzb54yR62mX0IT6sd').delete()
.then(res => console.log('file deleted!'))
.catch(err => console.error(err))
