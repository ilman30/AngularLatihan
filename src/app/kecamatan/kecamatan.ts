import { Kabupaten } from '../kabupaten/kabupaten';
import { Provinsi } from '../provinsi/provinsi';

export class Kecamatan {

    idKecamatan:Number;
    namaKecamatan:string;
    kabupaten: Kabupaten;
    kodeKabupaten: Number;
    provinsi: Provinsi;
    kodeProvinsi: Number;

}