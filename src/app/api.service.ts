import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { classname } from './class';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
arrservice:classname[]=[];
  constructor(public r:Router) { }
}
