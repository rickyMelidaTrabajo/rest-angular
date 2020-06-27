import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "./global";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  public url: string;
  constructor( private _http: HttpClient ) { 
    this.url = Global.url;
  }

  probando() {
    let dato = 'Este es desde el servicio';
    return dato;
  }


  read(): Observable<any> {
    return this._http.get(this.url + 'read');
  }
}
