import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent implements OnInit {
  createNoteForm: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  // message = 'Añadir nota';

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private toastr: ToastrService,
    ) {
      this.createNoteForm = this.formBuilder.group({
        title: ['', Validators.required ],
        description: ['', Validators.required ],
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
      console.log(this.id);
  }

  ngOnInit(): void {
    this.updateNotes()
  }
  addNote(){
    this.submitted = true;
    if(this.createNoteForm.invalid){
    return;
    }
    const note: any = {
      title: this.createNoteForm.value.title,
      description: this.createNoteForm.value.description,
      createDate: new Date(),
      updateDate: new Date()
    }
      this.loading = true;
      this.noteService.addNote(note).then(() =>{
        this.toastr.success('Tu nota ha sido añadida!', 'Listo!');
        // console.log('Nota añadida');
        this.loading = false;
        this.router.navigate(['/notes'])
      }).catch(error => {
        console.log(error);
        this.loading = false;
      })
    // console.log(note);
  }
  updateNotes(){
    // this.message = "Editar Nota"
    if(this.id !== null){
      this.noteService.getNoteId(this.id).subscribe(data => {
        console.log(data);
      })
    }
  }
}
