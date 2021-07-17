import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // public isLogged = false;
 // public user: any;
  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  // async ngOnInit() {
  // this.user = await this.authService.getCurrentUser();
  //   if (this.user){
  //     this.isLogged = true;
  //   }
  // }

  async onLogout(){
    await this.authService.logout();
    this.router.navigate(['/cover'])
  }
}
