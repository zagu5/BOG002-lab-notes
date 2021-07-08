import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private firestore: AngularFirestore) { }

  addNote(note:any): Promise<any>{
    return this.firestore.collection('NOTAS').add(note);
  }
}
