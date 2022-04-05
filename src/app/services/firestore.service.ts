import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, setDoc, getDocs, getFirestore, doc} from 'firebase/firestore';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  db = getFirestore();

  constructor(private firestore: AngularFirestore) { }

  async registerUserDB(user: User, id: string){
    // try {
    //   await this.firestore.collection('usersInformation').add({user}).then(() => {
    //      console.log('Se dio de alta el usuario');
    //   });
    // } catch (error) {
    //   console.log(error);
    // }

    try {
    await setDoc(doc(this.db, 'usersInformation', user.uid), user);
    // console.log('se creo usuario correcto');
    } catch (error) {
      // console.log(error);
    }


    this.firestore.collection('usersTempRegister').doc(id).delete().then( () => {
      console.log('');})
      .catch( (error) => {
        console.log('');
      });

  }


  async tempUserRegister(email, password, telephone){
    try {
      await this.firestore.collection('usersTempRegister').add({email, password, telephone }).then(() => {
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTempUsers(){
    return  await getDocs( collection( this.db, 'usersTempRegister'));
  }

  async tempUserSearch(){

    const usersTempRegister = await this.firestore.collection('usersTempRegister').ref.get();

    return new Promise <Event[]> (resolve => {
      const v = usersTempRegister.docs.map( x => {
        const obj = x.data();
        // obj.id = x.id;
        return obj as Event;
      });
      resolve(v);
    });

  }
}
