import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProvinsiComponent } from './provinsi/provinsi.component';
import { HttpClientModule } from '@angular/common/http';
import { ProvinsiListComponent } from './provinsi/provinsilist.component';
import { KabupatenComponent } from './kabupaten/kabupaten.component';
import { KabupatenListComponent } from './kabupaten/kabupatenlist.component';
import { KecamatanComponent } from './kecamatan/kecamatan.component';
import { KecamatanListComponent } from './kecamatan/kecamatanlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProvinsiComponent,
    ProvinsiListComponent,
    KabupatenComponent,
    KabupatenListComponent,
    KecamatanComponent,
    KecamatanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
