import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Provinsi } from '../provinsi/provinsi';
import { ProvinsiService } from '../provinsi/provinsi.service';
import { Kabupaten } from './kabupaten';
import { KabupatenService } from './kabupaten.service';

@Component({
    selector: 'app-kabupaten',
    templateUrl: './kabupaten.component.html',
    providers: [KabupatenService, ProvinsiService]
  })

  export class KabupatenComponent implements OnInit {

    addKabupatenForm: FormGroup;
    listProv: Provinsi[];
    
    constructor(private kabupatenService: KabupatenService, private provinsiService: ProvinsiService, private router: Router) {

     }
  
    ngOnInit(): void {
      this.addKabupatenForm = new FormGroup({
        idKabupaten: new FormControl(null,[Validators.required]),
        namaKabupaten: new FormControl(null,[Validators.required, Validators.minLength(4)]),
        kodeProvinsi: new FormControl(null,[Validators.required])
      });

      this.provinsiService.listProvinsi().subscribe((data)=>{
        console.log(data);
        this.listProv=data;
      }, error => {
          console.log(error);
      })
    }
  
    simpanKab(): void{
      console.log(this.addKabupatenForm.value);
      let kab = new Kabupaten();
      kab.idKabupaten = this.addKabupatenForm.value.idKabupaten;
      kab.namaKabupaten = this.addKabupatenForm.value.namaKabupaten;
      kab.kodeProvinsi = this.addKabupatenForm.value.kodeProvinsi;
      this.kabupatenService.insertKab(kab).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/listkab']);
      });
    }
  
  }