import { Component, OnInit } from '@angular/core';
// import { Note } from '../../note';
// import { NOTAS } from 'src/app/mock-notes';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
// import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
    // notas = NOTAS;
    // notas: Observable<any[]>;
    // selectedNote?: Note;  // No hay ninguna nota cuando se inicia la app
    // note: Note = {
    // id: 1,
    // title: 'primera nota',
    // description: 'Aprendiendo angular',
  notes: any [] = [];

  constructor(
    private noteService: NoteService,
    //firestore: AngularFirestore
    ) {
    // this.notas = firestore.collection('notas').valueChanges();
  }
    ngOnInit() {
      this.getNotes()
  }

  getNotes(){
    this.noteService.getNote().subscribe(data =>{
      this.notes = [];
      data.forEach((element: any) => {
        // console.log(element.payload.doc.id);
        // console.log(element.payload.doc.data);
        this.notes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
        console.log(this.notes);
      // console.log(data);
    });
  }
  deleteNotes(id: string) {
    this.noteService.deleteNote(id).then(() =>{
      console.log('Tu nota ha sido eliminada');
    }).catch(error => {
      console.log(error);
    });
  }
  // onSelect metodo que asigna la nota en el momento que se hizo click al comp selectedNote
  // onSelect(note: Note): void {
  //   this.selectedNote = note;
  // }
}
