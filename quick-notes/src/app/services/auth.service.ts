import { Injectable, NgZone } from '@angular/core';
import { User } from 'src/app/models/user/user.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
// import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Guarda los datos del ususario registrado
  constructor(
    public angularFirestore: AngularFirestore,
    private auth: AngularFireAuth,
    // public router: Router,
    // public ngZone: NgZone,
  ) { }

  loginWithGoogle(){
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }
  // setUserData(user){
  //   const userRef: AngularFirestoreDocument<any> =
  //     this.angularFireAuth.doc((`users/${user.uid}`);
  //   const userData: User = {
  //     uid: user.uid,
  //     name: user.name,
  //     email: user.email,
  //     displayName: user.displayName,
  //     password: user.password,
  //     emailVerified: user.emailVerified,
  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }
  // // registro con email/password
  // SignUp(email,password) {
  //   return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
  //   .then((result) => {
  //     this.SendVerificationMail();
  //     this.setUserData(result.user);
  //   })catch((error) => {
  //     window.alert(error.message)
  //   })
  // }
  // // Login
  //  con email/password
  // SignIn(email, password) {
  //   return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  //   .then ((result) => {
  //     this.ngZone.run(() => {
  //       this.router.navigate(['dashboard']);
  //     });
  //     this.setUserData(result.user);
  //   }).catch((error) => {
  //     window.alert(error.message)
  //   })
  // }
}
