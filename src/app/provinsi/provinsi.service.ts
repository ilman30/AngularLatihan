import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Provinsi } from "./provinsi";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ProvinsiService{

    constructor(private httpKlien: HttpClient){
        
    }

    insertProv(provinsi: Provinsi): Observable<any>{
        return this.httpKlien.post(environment.baseUrl +'/saveprovjson' , provinsi)
        .pipe(map(data => data));
    }

    listProvinsi(): Observable<Provinsi[]>{
        return this.httpKlien.get(environment.baseUrl + '/listprovinsijson')
            .pipe(map(data=> <Provinsi[]>data));
    }
}