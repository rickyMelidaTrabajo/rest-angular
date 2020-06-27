import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

const rutas: Routes = [
    { path: '', component:  ReadComponent },
    { path: 'home', component:  ReadComponent },
    { path: 'add', component: CreateComponent },
    { path: 'update', component: UpdateComponent },
    { path: 'delete', component: DeleteComponent },

];

export const appRutas: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);