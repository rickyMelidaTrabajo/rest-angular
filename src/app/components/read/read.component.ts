import { Component, OnInit } from '@angular/core';
import { CancionService } from "../../services/cancion.service";
import { Global } from 'src/app/services/global';
import { Cancion } from "../../models/cancion.models";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {
  public url: string;
  public cancion: Cancion;

  constructor( private _cancionService: CancionService ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._cancionService.read().subscribe(
      res => {
        this.cancion = res.data;
        console.log(res);
      },
      err => {
        console.log('error al cargar');

      }
    )
  }

}
