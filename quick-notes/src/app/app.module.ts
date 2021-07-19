import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// *** firebase modules ***
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment} from '../environments/environment';

// *** Modules ***
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { AngularFirestore} from '@angular/fire/firestore';
// import { FlashMessagesModule} from 'angular2-flash-messages';

// *** Components ***
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/list-notes/notes.component';
import { CoverComponent } from './components/cover/cover.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



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
    CreateNotesComponent,
    UserComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
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

