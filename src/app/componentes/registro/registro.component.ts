import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { TemperaturaService } from 'src/app/services/temperatura.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  formulario!: FormGroup;
  tiempo: any;
  name: any;
  temperatura: any;
  humedad: any;
  longitud: any;
  latitud: any;
  descripcion: any;
  showError!: boolean;
  mensajeError!: string;


  constructor(
    private fb: FormBuilder,
    private _tiempo: TemperaturaService
    ){
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
    this.showError = false;
    console.log("Pruebas Boton", this.formulario);
    this._tiempo.getStatusWeather(this.formulario.get('ciudad')?.value, this.formulario.get('codigo')?.value)
      .subscribe( respuesta =>{
        this.tiempo = respuesta;
        this.name = this.tiempo.name;
        this.temperatura = this.tiempo.main.temp;
        this.humedad = this.tiempo.main.humidity;
        this.latitud = this.tiempo.coord.lat;
        this.longitud = this.tiempo.coord.lon;
        this.descripcion = this.tiempo.weather[0].description;
        console.log("respuesta", respuesta);
        
      },
        error => {
          this.showError = true;
          this.mensajeError = "Error al consultar el Tiempo , intentelo mas Tarde!";
        }
      
      )
    
  }

}
