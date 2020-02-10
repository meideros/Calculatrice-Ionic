import { Component } from '@angular/core';
import {compilerIsNewStylingInUse} from "@angular/compiler/src/render3/view/styling_state";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
   grid = [
    [ "AC","+/-","%","/"],
    [ "7","8","9","x"],
    [ "4","5","6","-"],
    [ "1","2","3","+"],
    [ "0",",","="],
  ];
  ecran = '';
  constructor() {}
  doSomeThings(btn) {
    if(isNaN(btn)){
      switch (btn) {
        case "AC":
          let screen = this.ecran.split('')
          screen.pop()
          this.ecran = screen.join('')
        break;
        case "+/-":
            this.ecran.length != 0 ? isNaN(parseInt(this.ecran.split('').pop())) ? this.ecran+= "-" : "" : this.ecran+= "-"
        break;
        case ",":
            this.ecran.length != 0 ? !isNaN(parseInt(this.ecran.split('').pop())) ? this.ecran+= "," : "" : ""
        break;
        case "+":
            this.ecran.length != 0 ? !isNaN(parseInt(this.ecran.split('').pop())) ? this.ecran+= "+" : "" : ""
        break;
        case "/":
            this.ecran.length != 0 ? !isNaN(parseInt(this.ecran.split('').pop())) ? this.ecran+= "/" : "" : ""
        break;
        case "-":
            this.ecran.length != 0 ? !isNaN(parseInt(this.ecran.split('').pop())) ? this.ecran+= "-" : "" : ""
        break;
        case "x":
            this.ecran.length != 0 ? !isNaN(parseInt(this.ecran.split('').pop())) ? this.ecran+= "x" : "" : ""
        break;
        case "%":
            this.ecran.length != 0 ? !isNaN(parseInt(this.ecran.split('').pop())) ? this.ecran+= "%" : "" : ""
        break;
        case "=":
            const add = this.ecran.split('+');
            const minus = this.ecran.split('-');
            const multiplication = this.ecran.split('x');
            const division = this.ecran.split('/');
            const modulo = this.ecran.split('%');
            if (add.length > 1) {
              let result = 0;
              for (let i = 0; i < add.length; i++) {
                  result += parseInt(add[i], 10);
              }
              this.ecran = String(result);
            } else if (minus.length > 1) {
              let result = 0;
              for (let i = 0; i < minus.length; i++) {
                if (i === 0) {
                  result -= parseInt(minus[i], 10);
                  result = -1 * result;
                } else {
                    result -= parseInt(minus[i], 10);
                }
              }
              this.ecran = String(result);
            } else if (multiplication.length > 1) {
              let result = 1;
              for (let i = 0; i < multiplication.length; i++) {
                result *= parseInt(multiplication[i], 10);
              }
              this.ecran = String(result);
            } else if (division.length > 1) {
              let result = 0;
              for (let i = 0; i < division.length; i++) {
                if (i === 0) {
                  result = parseInt(division[i].trim(), 10);
                } else {
                  result = result / parseInt(division[i].trim(), 10);
                }
              }
              this.ecran = String(result);
            } else if (modulo.length > 1) {
              let result = 1;
              for (let i = 0; i < modulo.length; i++) {
                if (i === 0) {
                  result = parseInt(modulo[i].trim(), 10);
                } else {
                  result = result % parseInt(modulo[i].trim(), 10);
                }   
            }
              this.ecran = String(result);
            }
        break;
        default:
          break;
      }
    }else{
      this.ecran += btn
    }   
  }
}