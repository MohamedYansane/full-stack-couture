import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientsService } from '../services/clients.service';
import { Client } from '../client';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register.scss'],

})
export class RegisterFormComponent implements OnInit {
  valForm: FormGroup;
  status: string[] = ["actif","inactif"];

  //service of formBuilder
  constructor(
    private _fb:FormBuilder,private _clientService:ClientsService,
    private _dialogRef:MatDialogRef<RegisterFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any, // the best play to display it is inside the ngOnInit
 ){
    //it will allow to handle errors
    this.valForm = this._fb.group({
      nom: '',
      prenom:'',
      phone:'',
      cni:'',
      adresse:'',
      email:'',
      status:'',
      sexe:'',
    })

  }
  ngOnInit():void {
    // the first data will contain the data and eyeOpen
    //console.log(this.data);
   this.valForm.patchValue(this.data.data);
  }
  onFormSubmit(){
    //this.valForm.valid ? console.log(this.valForm.value) :console.log("Not valid");
    if(this.valForm.valid)
    {
        const user = this.valForm.value;
        console.log(user);
        if(!user.nom || !user.prenom || !user.phone || !user.adresse || !user.cni || !user.sexe||!user.status||!user.email){
          alert("Tous les champs sont obligatoire");
          console.log(user);
        }
        // if there is a data i'll tell him to update else create
        //recuperer la donnee from clientList
        let userData = this.data.data;
        if(userData ){
          this._clientService.updateClient(userData.id,user).subscribe({
            next:(value: any) => {
              if(value){
                alert("updated successfully");
                this._dialogRef.close(true);
              }
            },
            error:(error: any) => {
              console.error(error);
            }
          })
        }
        else
        {
          console.log("insert section");
          const client = new Client(
            user.id,
            user.nom,
            user.prenom,
            user.phone,
            user.adresse,
            user.email,
            user.cni,
            user.sexe,
            user.status
          );
          this._clientService.addClient(client).subscribe({
            next:(value:any) =>{
              alert("Client added successfully");
              this._dialogRef.close(true);
            },
            error:(error:any) =>{
              console.error(error);
            }
          })

        }
    }

  }

}
