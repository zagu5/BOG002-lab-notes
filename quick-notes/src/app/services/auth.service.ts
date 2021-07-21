import { Injectable } from '@angular/core';
import { User } from '../models/note/user.model';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
     public afAuth: AngularFireAuth,
    public router: Router,


  ) {}

  async loginGoogle(){
    const result =  await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return result
  }

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

