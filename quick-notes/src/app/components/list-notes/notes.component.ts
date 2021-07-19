import { Component, OnInit } from '@angular/core';
// import { Note } from '../../note';
// import { NOTAS } from 'src/app/mock-notes';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


// import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public user$: Observable<any> = this.authService.afAuth.user;
    // notas = NOTAS;
    // notas: Observable<any[]>;
    // selectedNote?: Note;  // No hay ninguna nota cuando se inicia la app
    // note: Note = {
    // id: 1,
    // title: 'primera nota',
    // description: 'Aprendiendo angular',
  notes: any [] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private noteService: NoteService,
    //firestore: AngularFirestore
    ) {
    // this.notas = firestore.collection('notas').valueChanges();
  }
    ngOnInit() {
      this.getNotes()
  }

  async onLogout(){
    await this.authService.logout();
    this.router.navigate(['/cover'])
  }

  getNotes(){
    this.noteService.getNote().subscribe(data =>{
      // this.notes = [];
      // data.forEach((element: any) => {
      //   // console.log(element.payload.doc.id);
      //   // console.log(element.payload.doc.data);
      //   this.notes.push({
      //     id: element.payload.doc.id,
      //     ...element.payload.doc.data()
      //   })
      // });

      this.notes = data.map((element: any) => ({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      );
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
}
