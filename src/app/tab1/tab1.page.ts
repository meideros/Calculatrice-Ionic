import { Component } from '@angular/core';
import {compilerIsNewStylingInUse} from "@angular/compiler/src/render3/view/styling_state";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ecran = '';
  constructor() {}
  setNumberOne() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 1;
  }
  setNumberTwo() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 2;
  }
  setNumberThree() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 3;
  }
  setNumberFour() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 4;
  }
  setNumberFive() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 5;
  }
  setNumberSix() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 6;
  }
  setNumberSeven() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 7;
  }
  setNumberEight() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 8;
  }
  setNumberNine() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 9;
  }
  setNumberZero() {
    if (this.ecran === '') {
      this.ecran = null;
    }
    this.ecran += 0;
  }
  clear() {
    this.ecran = '';
  }
  clearOne() {
    const tab: string[] = this.ecran.split('')
    tab.pop()
    this.ecran = tab.join('');
  }
  setPlusSign() {
    if (this.ecran.length >= 1) {
      const lastvalue = this.ecran.split('+').pop()
      if ( lastvalue !== ' ' ) {
        this.ecran += ' + ';
      }
    }
  }
  setMinusSign() {
    if (this.ecran.length >= 1) {
      const lastvalue = this.ecran.split('-').pop()
      if ( lastvalue !== ' ' ) {
        this.ecran += ' - ';
      }
    }
  }
  setModuloSign() {
    if (this.ecran.length >= 1) {
      const lastvalue = this.ecran.split('%').pop()
      if ( lastvalue !== ' ' ) {
        this.ecran += ' % ';
      }
    }
  }
  setDivisionSign() {
    if (this.ecran.length >= 1) {
      const lastvalue = this.ecran.split('/').pop()
      if ( lastvalue !== ' ' ) {
        this.ecran += ' / ';
      }
    }
  }
  setMultiplicationSign() {
    if (this.ecran.length >= 1) {
      const lastvalue = this.ecran.split('x').pop()
      if ( lastvalue !== '/ ' && lastvalue !== ' ' && lastvalue !== '+' && lastvalue !== '-') {
        this.ecran += ' x ';
      }
    }
  }
  setPlusOrMinus() {
    if (this.ecran.length === 0) {
      this.ecran += '-';
    }
  }
  equals() {
    const add = this.ecran.split('+');
    const minus = this.ecran.split('-');
    const multiplication = this.ecran.split('x');
    const division = this.ecran.split('/');
    const modulo = this.ecran.split('%');
    if (add.length > 1 && add[add.length - 1] !== ' ') {
      let result = 0;
      for (let i = 0; i < add.length; i++) {
          result += parseInt(add[i], 10);
      }
      this.ecran = String(result);
    } else if (minus.length > 1 && minus[minus.length - 1] !== ' ') {
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
    } else if (multiplication.length > 1 && multiplication[multiplication.length - 1] !== ' ') {
      let result = 1;
      for (let i = 0; i < multiplication.length; i++) {
        result *= parseInt(multiplication[i], 10);
      }
      this.ecran = String(result);
    } else if (division.length > 1 && division[division.length - 1] !== ' ') {
      let result = 0;
      for (let i = 0; i < division.length; i++) {
        if (i === 0) {
          result = parseInt(division[i].trim(), 10);
        } else {
          result = result / parseInt(division[i].trim(), 10);
        }
      }
      this.ecran = String(result);
    } else if (modulo.length > 1 && modulo[modulo.length - 1] !== ' ') {
      let result = 1;
      for (let i = 0; i < modulo.length; i++) {
        if (i === 0) {
          result = parseInt(modulo[i].trim(), 10);
        } else {
          result = result % parseInt(modulo[i].trim(), 10);
        }      }
      this.ecran = String(result);
    }
  }
}
