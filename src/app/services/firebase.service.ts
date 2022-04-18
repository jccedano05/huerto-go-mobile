import { Injectable } from '@angular/core';
import { first} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(private afAuth: AngularFireAuth) { }




 loginWithGmail() {

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log('token');
    console.log(token);
    // The signed-in user info.
    const user = result.user;
    console.log('user');
    console.log(user.email);

    console.log('-------');
    console.log('Usuario Logueado Gmail');

    return user.uid;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;

    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.email;
    console.log(email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    });

  };


  async loginWithFacebook(): Promise<string> {

    let uid: string;

    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log('token');
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);

      uid = user.uid;
      // ...
    }).catch((error) => {
      const errorCode = error.code;

      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(credential);
      });

      return uid;
    };


  async login( email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword( email, password);
    } catch (error) {
      // console.log(error);
    }
  }

  async registerUser( email: string, password: string) {
    try {
      const register = await this.afAuth.createUserWithEmailAndPassword( email, password);
      return register;
    } catch (error) {
      // console.log(error);
    }
  }

 async logout() {
  try {
    return await this.afAuth.signOut();
  } catch (error) {
    // console.log(error);
  }
  }


  async getCurrentUser(){
    try {
      return await this.afAuth.authState.pipe(first()).toPromise();
    } catch (error) {
      console.log(error);
    }
  }

}
