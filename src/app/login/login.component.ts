import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { classname } from '../class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  obj:classname = new classname();

  isEdit:boolean=false;

     logarr:classname[]=[];
    index:any;

    

    id:any;
    
  constructor(public r:ActivatedRoute,public s:ApiService,public router:Router) { 
    this.id =  this.r.snapshot.paramMap.get("id");
    if(this.id != null){
    
      this.logarr=this.s.arrservice;

      this.obj.username = this.logarr[this.id].username ;    //oupt put screen la 
      this.obj.password = this.logarr[this.id].password ;

      console.log(this.id);

      this.isEdit=true;


    }
  }

  ngOnInit(): void {
  }
  login()
  {

    if(this.isEdit){

      this.logarr[this.id] = this.obj;
      this.obj=new classname();
      this.router.navigate(['/show']);

    } else if(this.obj.username&&this.obj.password)
    {
      this.s.arrservice.push(this.obj)  
      this.obj=new classname();
      this.router.navigate(['/show']);
      console.log("Login successful");

    }
    else{
      alert("empty not allowed");
    }
  }

}



