import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addressForm:FormGroup|any;

  textBoxDisabled = true;

  type:any;
  regForm: FormGroup | any;
  submitted = false;

  // Service: any = ['Finance', 'Construction', 'Tennessee', 'Michigan']
  Service: any = ['MCA', 'MBA', 'MSC', 'ECE']

 constructor(  
    private router: Router,public formBuilder: FormBuilder,
   private http:HttpClient ) { }

  ngOnInit()
    {
      this.regForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
       email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
       phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
       type: ['', [Validators.required]],
       servicename:['',[Validators.required]],
   
      address:this.formBuilder.group({
  street:['',[Validators.required]],
  city:['',[Validators.required]],
  state:['',[Validators.required]]
  // pincode:['', [Validators.required, Validators.pattern('[0-9]{6}')]]
     })
    })
    // this.regForm.get("address").get("city").setValue("chennai");
    // this.regForm.get("address").get("street").patchValue("fathimastreet");
  
    
    this.regForm.patchValue({ //hole obj ku value replace pana
  
      name:"jaisha",
      password:'jaisha12',
      email:"jai@gmail.com",
      phone:8765454323,
      type:'female',
      servicename:'mca',

      address:{city:"kknager",state:"tamilnadu" }


   });
   
  }

  get errorCtr() {  
    return this.regForm.controls;
  }

onSubmit(){
  this.submitted=true
  var street=this.regForm.get("address").get("street").value;//another fn call. pre nested array address.
    console.log(street);
  if(this.regForm.invalid){
    console.log('invalid')
  }
  else{
    console.log(this.regForm.value);
    
  }

}
check(e:any){
  
}
}
