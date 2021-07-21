import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'quick-notes';
}












// OJO
// @Component({ --> Decorador osea característicasl del componente al final
//   selector: 'app-root', --> etiqueta que viene del final de html
//   templateUrl: './app.component.html', --> la vista, la loógica estará dentro de la class
//   styleUrls: ['./app.component.css'] --> estilos unicos de este componente
// })
// export class AppComponent {
//   title = 'quick-notes';
// }
