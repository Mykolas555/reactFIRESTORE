import firebase from "../firebase";
import { app } from '../firebase'
import 'firebase/compat/auth'

const auth = app.auth()
const db = app.firestore();

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const result = await auth.createUserWithEmailAndPassword(email, password);
        const user = result.user;
        await db.collection('users').add({
            uid:user.uid,
            name,
            authProvider: 'local',
            email
        })
    }catch(err){
        console.log(err)
    }
}

export default firebase

export {
    auth,
    db,
    registerWithEmailAndPassword
}