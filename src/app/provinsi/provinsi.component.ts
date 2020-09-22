import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Provinsi } from './provinsi';
import { ProvinsiService } from './provinsi.service';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.component.html',
  providers: [ProvinsiService]
})
export class ProvinsiComponent implements OnInit {

  id: String;
  addProvinsiForm: FormGroup;
  
  constructor(private provinsiService: ProvinsiService, private route: ActivatedRoute, private router: Router) { 
      this.addProvinsiForm = new FormGroup({
        idProvinsi: new FormControl(null,[Validators.required]),
        namaProvinsi: new FormControl(null,[Validators.required, Validators.minLength(4)])
      });

  }

  ngOnInit(): void {
    
    this.route.params.subscribe(rute => {
      this.id = rute.id;
      this.provinsiService.getProvinsiById(this.id).subscribe(data => {
        this.addProvinsiForm.get('idProvinsi').setValue(data.idProvinsi);
        this.addProvinsiForm.get('namaProvinsi').setValue(data.namaProvinsi);
      }, error => {
        alert('Data tidak ditemukan!');
      });
    });
  }

  simpanProv(): void{
    console.log(this.addProvinsiForm.value);
    let prov = new Provinsi();
    prov.idProvinsi = this.addProvinsiForm.value.idProvinsi;
    prov.namaProvinsi = this.addProvinsiForm.value.namaProvinsi;
    this.provinsiService.insertProv(prov).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/listprov']);
    });
  }

}
