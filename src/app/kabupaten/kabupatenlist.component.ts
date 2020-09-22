import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Kabupaten } from './kabupaten';
import { KabupatenService } from './kabupaten.service';

@Component({
    selector: 'app-home',
    templateUrl: './kabupatenlist.component.html',
    providers: [KabupatenService]
})
export class KabupatenListComponent implements OnInit, AfterViewInit {

    listKab: Kabupaten[];

    constructor(private kabupatenService: KabupatenService){


    }

    ngOnInit(): void{
        this.kabupatenService.listKab().subscribe((data)=>{
            //console.log(data);
            this.listKab=data;
        }, error => {
            console.log(error);
        })
    }

    ngAfterViewInit(){
        
    }
    
}