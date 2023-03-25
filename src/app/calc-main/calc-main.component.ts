import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-main',
  templateUrl: './calc-main.component.html',
  styleUrls: ['./calc-main.component.css']
})
export class CalcMainComponent {
  alt : number = 0;
  peso : number = 0;
  IMC : number = 0;
  resp : string = "";

  calcIMC(){
    this.IMC = this.peso/(this.alt*this.alt);
    
    this.resp = "Seu IMC é: " + this.IMC.toFixed(2) + ". \n";

    if(this.IMC < 18.5){
      this.resp += "Classificação: magreza.";
    }
    else if(this.IMC < 25){
      this.resp += "Classificação: normal.";
    }
    else if(this.IMC < 30){
      this.resp += "Classificação: sobrepeso.";
    }
    else if(this.IMC < 35){
      this.resp += "Classificação: obesidade grau 1.";
    }
    else if(this.IMC < 40){
      this.resp += "Classificação: obesidade grau 2.";
    }
    else{
      this.resp += "Classificação: obesidade grau 3.";
    }

    this.pesoIdeal();

  }

  pesoIdeal(){
    let pesoId : number = 0;
    let man = document.getElementById("man-check") as HTMLInputElement;
    let woman = document.getElementById("woman-check") as HTMLInputElement;

    if(man.checked == true){
      pesoId = (72.7 * this.alt) - 62;
    }
    else if(woman.checked == true){
      pesoId = (62.1 * this.alt) - 48.7;
    }
    else{
      alert("Por favor selecione o seu gênero.");
    }

    this.resp += "\nO seu peso ideal é próximo de: " + pesoId.toFixed(2) + " kg.";
    
  }

  limpar(){
    this.alt = 0;
    this.peso = 0;
    this.IMC = 0;
    this.resp = "";
    let man = document.getElementById("man-check") as HTMLInputElement;
    let woman = document.getElementById("woman-check") as HTMLInputElement;

    man.checked = false;
    woman.checked = false;
  }

}
