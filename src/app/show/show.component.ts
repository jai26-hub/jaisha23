import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { classname } from '../class';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
arrshow:classname[]=[];
obj:classname=new classname;
  constructor(public s:ApiService,public router:Router) { 
this.arrshow= this.s.arrservice;
  }
  ngOnInit(): void {
  }
  Add()
  {
    this.router.navigate(['/login']);
  }
  register(){
    this.router.navigate(['/register']);
  }

    Delete(i: number)
    {
      this.arrshow.splice(i, 1);
    }


}
