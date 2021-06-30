import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CoverComponent } from './cover/cover.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent} from './notes/notes.component';

const routes: Routes = [
 { path: 'cover', component:  CoverComponent},
 { path: 'home', component: HomeComponent},
 { path: 'register', component: RegisterComponent},
 { path: 'login', component: LoginComponent},
 { path: 'notes', component: NotesComponent},
 { path: '**', redirectTo: 'cover'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
