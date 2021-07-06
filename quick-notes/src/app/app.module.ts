import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment} from '../environments/environment';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFirestore} from '@angular/fire/firestore';
// import { AngularFireAuthModule} from '@angular/fire/auth';
// import { FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { CoverComponent } from './cover/cover.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    NotesComponent,
    CoverComponent,
    NoteDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    // FlashMessagesModule.forRoot(),
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }






// linea 6 pendiente por  FirestoreSettingsToken { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
// OJO app.module permite cargar configuraciones para el  modulo basicamente es la aplicacion completa
// declarations: declarar
// imports:
// providers: [AngularFirestore],
// bootstrap: [AppComponent]

