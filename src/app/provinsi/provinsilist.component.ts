import { OnInit } from '@angular/core';
import { AfterViewInit, Component } from "@angular/core";
import { Provinsi } from './provinsi';
import { ProvinsiService } from './provinsi.service';


@Component({
    selector: 'app-home',
    templateUrl: './provinsilist.component.html',
    providers: [ProvinsiService]
})
export class ProvinsiListComponent implements OnInit, AfterViewInit {

    listProv: Provinsi[];

    constructor(private provinsiService: ProvinsiService){


    }

    ngOnInit(): void{
        this.provinsiService.listProvinsi().subscribe((data)=>{
            //console.log(data);
            this.listProv=data;
        }, error => {
            console.log(error);
        })
    }

    ngAfterViewInit(){
        
    }
    
}