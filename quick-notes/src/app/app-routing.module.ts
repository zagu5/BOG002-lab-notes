import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CoverComponent } from './components/cover/cover.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent} from './components/list-notes/notes.component';
import { CreateNotesComponent} from './components/create-notes/create-notes.component';

const routes: Routes = [
 { path:  '', redirectTo: 'home', pathMatch: 'full'},
 { path: 'cover', component:  CoverComponent},
 { path: 'home', component: HomeComponent},
 { path: 'register', component: RegisterComponent},
 { path: 'login', component: LoginComponent},
 { path: 'notes', component: NotesComponent},
 { path: 'create-notes', component: CreateNotesComponent},
 { path: 'edit-note/:id', component: CreateNotesComponent},
 { path: '**', redirectTo: 'home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
