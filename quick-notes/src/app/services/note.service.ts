import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NOTAS } from '../mock-notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private firestore: AngularFirestore) { }

  addNote(note:any): Promise<any>{
    return this.firestore.collection('NOTAS').add(note);
  }

  getNote(): Observable<any>{
    return this.firestore.collection('NOTAS', ref => ref.orderBy('createDate','asc')).snapshotChanges();
  }
  deleteNote(id: string): Promise<any> {
    return this.firestore.collection('NOTAS').doc(id).delete();
  }
  getNoteId(id: string): Observable<any> {
    return this.firestore.collection('NOTAS').doc(id).snapshotChanges();
  }
}


