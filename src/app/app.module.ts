import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

import { HttpClientModule } from "@angular/common/http";

//rutas
import { routing, appRutas } from "./app.routing";
import { HomeComponent } from './components/home/home.component';

//Formularios
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    appRutas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
