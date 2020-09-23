import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Kabupaten } from '../kabupaten/kabupaten';
import { Kecamatan } from './kecamatan';

@Injectable()
export class KecamatanService{

    constructor(private httpKlien: HttpClient){
        
    }

    insertKec(kecamatan: Kecamatan): Observable<any>{
        return this.httpKlien.post(environment.baseUrl +'/savekecjson' , kecamatan)
        .pipe(map(data => data));
    }

    listKec(): Observable<Kecamatan[]>{
        return this.httpKlien.get(environment.baseUrl + '/listkecjson')
            .pipe(map(data=> <Kecamatan[]>data));
    }

    getKecById(id): Observable<Kecamatan>{
        return this.httpKlien.get(environment.baseUrl + '/listkecjson/'+id)
            .pipe(map(data=> data as Kecamatan));
    }

    listKabupaten(idProv): Observable<Kabupaten[]>{
        return this.httpKlien.get(environment.baseUrl + '/listkabjson2/'+idProv)
            .pipe(map(data=> <Kabupaten[]>data));
    }

}