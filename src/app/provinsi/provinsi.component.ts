import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Provinsi } from './provinsi';
import { ProvinsiService } from './provinsi.service';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.component.html',
  providers: [ProvinsiService]
})
export class ProvinsiComponent implements OnInit {

  addProvinsiForm: FormGroup;
  
  constructor(private provinsiService: ProvinsiService, private router: Router) { }

  ngOnInit(): void {
    this.addProvinsiForm = new FormGroup({
      idProvinsi: new FormControl(null,[Validators.required]),
      namaProvinsi: new FormControl(null,[Validators.required, Validators.minLength(4)])
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
