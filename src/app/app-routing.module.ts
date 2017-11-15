import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { BebidasComponent } from './bebidas/bebidas.component';

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'home', component: AppComponent},
    {path: 'platillos', component: PlatillosComponent},
    {path: 'bebidas', component: BebidasComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
