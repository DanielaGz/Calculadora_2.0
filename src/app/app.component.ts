import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación calculadora';

  opA = 0;
  opB = 0;
  result = 0;

  sumar(){
    this.result = this.opA + this.opB;
  }
}
