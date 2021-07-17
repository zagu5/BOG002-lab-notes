import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  async onRegister(){
    console.log('Formulario:', this.registerForm.value)
    const { email, password }= this.registerForm.value;
    this.authService.register(email, password)
  }

  // async onRegister(){
  //   console.log('Formulario', this.registerForm.value)
  //   const { email, password } = this.registerForm.value
  //   try{
  //     const user = await this.authService.register(email, password)
  //     if (user){
  //       this.router.navigate(['/dashboard'])
  //     }
  //   } catch(error){
  //   console.log(error)
  //   }
  // }
}
