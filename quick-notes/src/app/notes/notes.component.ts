import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
// import { NOTAS } from '../mock-notes';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
    // notas = NOTAS;
    notas: Observable<any[]>;
    selectedNote?: Note;  // No hay ninguna nota cuando se inicia la app
    // note: Note = {
    // id: 1,
    // title: 'primera nota',
    // description: 'Aprendiendo angular',

  constructor(firestore: AngularFirestore) {
    this.notas = firestore.collection('notas').valueChanges();
  }
    ngOnInit() {

  }
  // onSelect metodo que asigna la nota en el momento que se hizo click al comp selectedNote
  onSelect(note: Note): void {
    this.selectedNote = note;
  }
}
