import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfesorListComponent } from './profesores/profesor-list/profesor-list.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { MisionComponent } from './mision/mision.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { DiresaComponent } from './diresa/diresa.component';
import { RedesComponent } from './redes/redes.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'',component:ContenidoComponent},
  {path:'mision', component: MisionComponent},
  {path:'objetivos', component: ObjetivosComponent},
  {path:'ubicacion', component: UbicacionComponent},
  {path:'redes', component: RedesComponent},
  {path:'diresa', component: DiresaComponent},
  {path:'login',component:LoginComponent},
  {path:'profesores',component:ProfesoresComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
