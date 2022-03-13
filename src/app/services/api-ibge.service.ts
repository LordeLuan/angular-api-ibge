import { MunicipiosModel } from './../models/municipios.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiIbgeService {

  constructor(private http: HttpClient) { }

  getCidade(UF: string){
    const urlGet = `${environment.urlAPIIbge}${UF}/municipios/`;
    return this.http.get<MunicipiosModel[]>(urlGet);
  }
}
