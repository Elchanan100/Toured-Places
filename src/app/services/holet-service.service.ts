import { Injectable } from '@angular/core';
import { modelHotel } from '../models/modelHotel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoletServiceService {
  AereeHotel:modelHotel[] =[]
  constructor(public httpAereeHotel:HttpClient) {
    httpAereeHotel.get('').subscribe(dataOfHttpAereeHotel =>{this.AereeHotel = dataOfHttpAereeHotel as modelHotel[]} )
   }
}
