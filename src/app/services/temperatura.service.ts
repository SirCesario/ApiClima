import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = '6d70ee73b073d87001a62018013a612c';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(
    private http: HttpClient
  ) { }

  getStatusWeather(ciudad: string, codigo: string){
    const url= `${ urlBase }?q=${ ciudad },${codigo }&appid=${ appId}`;
    return this.http.get(url);
  }

}
