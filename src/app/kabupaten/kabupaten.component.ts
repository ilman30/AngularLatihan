import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Provinsi } from '../provinsi/provinsi';
import { ProvinsiService } from '../provinsi/provinsi.service';
import { Kabupaten } from './kabupaten';
import { KabupatenService } from './kabupaten.service';

@Component({
    selector: 'app-home',
    templateUrl: './kabupaten.component.html',
    providers: [KabupatenService, ProvinsiService]
  })

  export class KabupatenComponent implements OnInit {

    id: String;
    addKabupatenForm: FormGroup;
    listProv: Provinsi[];
    
    constructor(private kabupatenService: KabupatenService, private provinsiService: ProvinsiService, private route: ActivatedRoute, private router: Router) {
      
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
  
    ngOnInit(): void {
      this.route.params.subscribe(rute => {
        this.id = rute.id;
        this.kabupatenService.getKabupatenById(this.id).subscribe(data => {
          this.addKabupatenForm.get('idKabupaten').setValue(data.idKabupaten);
          this.addKabupatenForm.get('namaKabupaten').setValue(data.namaKabupaten);
          this.addKabupatenForm.get('kodeProvinsi').setValue(data.kodeProvinsi);
        }, error => {
          alert('Data tidak ditemukan!');
        });
      });
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