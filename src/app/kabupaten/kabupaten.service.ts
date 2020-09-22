import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Kabupaten } from './kabupaten';

@Injectable()
export class KabupatenService{

    constructor(private httpKlien: HttpClient){
        
    }

    insertKab(kabupaten: Kabupaten): Observable<any>{
        return this.httpKlien.post(environment.baseUrl +'/savekabjson' , kabupaten)
        .pipe(map(data => data));
    }

    listKab(): Observable<Kabupaten[]>{
        return this.httpKlien.get(environment.baseUrl + '/listkabjson')
            .pipe(map(data=> <Kabupaten[]>data));
    }

}