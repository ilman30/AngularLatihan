import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { KabupatenComponent } from './kabupaten/kabupaten.component';
import { KabupatenListComponent } from './kabupaten/kabupatenlist.component';
import { ProvinsiComponent } from './provinsi/provinsi.component';
import { ProvinsiListComponent } from './provinsi/provinsilist.component';

const routes: Routes = [

  {path:"beranda",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"addprov",component:ProvinsiComponent},
  {path:"listprov",component:ProvinsiListComponent},
  {path:"editprov/:id",component:ProvinsiComponent, pathMatch: 'full'},
  {path:"addkab",component:KabupatenComponent},
  {path:"listkab",component:KabupatenListComponent},
  {path:"editkab/:id",component:KabupatenComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
