import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  formulario!: FormGroup;


  constructor(private fb: FormBuilder){
    this.iniciarFormulario();
 
  }

  ngOnInit(): void {

  }
    
    iniciarFormulario(){
      this.formulario = this.fb.group({
        ciudad: ['', Validators.required],
        codigo: ['', Validators.required]
      })
    }
  

  consultar(){
    console.log("Pruebas Boton", this.formulario);
    
  }

}
