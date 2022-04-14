import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 public name:FormControl = new FormControl()
 public cepBuscado:any 
 public cepDigitado:any
 public bairro:any = null
 public cidade:string = ''
 public estado:string = ''

  constructor(private cep:ApiService) { }
 

  getCepAPI(){
    this.cep.getCep(this.name.value)  
    this.cep.getAPi().then((cepURL) =>{
      this.cepBuscado == cepURL
      this.bairro = cepURL.bairro
      this.cidade = cepURL.localidade
      this.estado = cepURL.uf
      console.log(this.bairro)  
      console.log(this.name.value)    
      })  
  }

  inavalidCep() {
    if(this.name.valid) {
      alert('foi validado')
    }
  }

  ngOnInit(): void {
    console.log(this.name.value)
    this.getCepAPI()
    console.log(this.bairro) 
  }
}
