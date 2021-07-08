import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  @Input() note?: Note;
  constructor() { }

  ngOnInit(): void {
  }

}
