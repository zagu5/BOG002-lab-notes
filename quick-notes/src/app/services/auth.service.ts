import { Injectable } from '@angular/core';
import { User } from '../models/note/user.model';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // public user: User;
  // isloggedIn = false;
  // public user: User = new User();
  // public userdata$: Observable<firebase.User | null>;
 // public currentUser: Observable<User | null>;
  constructor(
     public afAuth: AngularFireAuth,
    //  public afs: AngularFirestore,
    //  public router: Router,

  ) {}

  async login(email:string, password:string){
    const result = await this.afAuth.signInWithEmailAndPassword(email,password)
    return result
  }

  async register(email:string, password:string){
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password)
  }

async logout(){
  await this.afAuth.signOut()
  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise()
  }
}

