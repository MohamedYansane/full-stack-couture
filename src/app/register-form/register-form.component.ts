import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register.scss']
})
export class RegisterFormComponent {
  valForm: FormGroup;
  status: string[] = ["actif","inactif"];
  //service of formBuilder
  constructor(private _fb:FormBuilder){
    //it will allow to handle errors
    this.valForm = this._fb.group({
      nom: '',
      prenom:'',
      phone:'',
      cni:'',
      adresse:'',
      email:'',
      status:'',
      genre:''
    })
  }
  onFormSubmit(){
    this.valForm.valid ? console.log(this.valForm.value) :console.log("Not valid");
  }

}
