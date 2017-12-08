import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ChefComponent } from './chef/chef.component';
import { MeseroComponent} from './mesero/mesero.component';
import { BarComponent } from './bar/bar.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'platillos', component: PlatillosComponent},
    {path: 'bebidas', component: BebidasComponent},
    {path: 'mesero', component: MeseroComponent},
    {path: 'chef', component: ChefComponent},
    {path: 'bar', component: BarComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
