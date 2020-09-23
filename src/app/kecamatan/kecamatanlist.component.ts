import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Kecamatan } from './kecamatan';
import { KecamatanService } from './kecamatan.service';

@Component({
    selector: 'app-home',
    templateUrl: './kecamatanlist.component.html',
    providers: [KecamatanService]
})

export class KecamatanListComponent implements OnInit, AfterViewInit {

    listKec: Kecamatan[];

    constructor(private kecamatanService: KecamatanService){

    }

    ngOnInit(): void{
        this.kecamatanService.listKec().subscribe((data)=>{
            console.log(data);
            this.listKec=data;
        }, error => {
            console.log(error);
        })
    }

    ngAfterViewInit(){
        
    }

}