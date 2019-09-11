import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tienda', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'home/:id', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'eventos', loadChildren: './paginas/eventos/eventos.module#EventosPageModule' },
  { path: 'loginn', loadChildren: './loginn/loginn.module#LoginnPageModule' },
  { path: 'ingresar', loadChildren: './ingresar/ingresar.module#IngresarPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'informacion', loadChildren: './informacion/informacion.module#InformacionPageModule' },
  { path: 'solicitudes', loadChildren: './solicitudes/solicitudes.module#SolicitudesPageModule' },
  { path: 'mensajes', loadChildren: './mensajes/mensajes.module#MensajesPageModule' },
  { path: 'selugar', loadChildren: './selugar/selugar.module#SelugarPageModule' },
  { path: 'veterinarias', loadChildren: './veterinarias/veterinarias.module#VeterinariasPageModule' },
  { path: 'mapav', loadChildren: './mapav/mapav.module#MapavPageModule' },
  { path: 'tienda', loadChildren: './paginas/tienda/tienda.module#TiendaPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
