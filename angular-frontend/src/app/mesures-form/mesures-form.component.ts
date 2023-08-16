import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Mesures } from '../mesures';
import { MesuresService } from '../services/mesures.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientsService } from '../services/clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-mesures-form',
  templateUrl: './mesures-form.component.html',
  styleUrls: ['./mesures.scss'],
})
export class MesuresFormComponent {
  valForm: FormGroup;
  clients!: Client[];
  //service of formBuilder
  constructor(
    private _fb: FormBuilder,
    private _mesureService: MesuresService,
    private _dialogRef: MatDialogRef<MesuresFormComponent>,
    private clientService: ClientsService,
    @Inject(MAT_DIALOG_DATA) public data: any // the best play to display it is inside the ngOnInit
  ) {
    //it will allow to handle errors
    this.valForm = this._fb.group({
      avantBras: '',
      biceps: '',
      cheville: '',
      cou: '',
      coude: '',
      coutureExt: '',
      cuisse: '',
      entreJambes: '',
      epaules: '',
      genou: '',
      hanches: '',
      htotale: '',
      lbras: '',
      lcorps: '',
      poitrine: '',
      tete: '',
      poignet: '',
      creteIliaques: '',
      dessousPoids: '',
      dtypes: '',
      ldos: '',
      client: '',
    });
  }
  ngOnInit(): void {
    // the first data will contain the data and eyeOpen
    //console.log(this.data);
    this.valForm.patchValue(this.data.data);
    //populate
    this.getClients();
    // Find the client object that matches the user
  }

  getClients() {
    this.clientService.getListOfAllClients().subscribe(
      (data) => {
        this.clients = data;
        if (this.clients) {
          const user = this.valForm.value.client;
          const selectedClient = Array.from(this.clients).find(
            (client) => client.id === user.id && client.email === user.email
          );

          // Set the selected client object as the initial value of the form control
          if (selectedClient) {
            this.valForm.patchValue({ client: selectedClient });
          }
        }
      },
      (error) => {
        console.error('Error while fetching clients:', error);
      }
    );
  }
  getValue(e: Event) {
    console.log((e.target as HTMLInputElement).value);
  }
  onFormSubmit() {
    if (this.valForm.valid) {
      let mesure = this.valForm.value;
      console.log(mesure);
      if (!mesure) {
        alert('Tous les champs sont obligatoires');
        console.log(mesure);
      }

      // if there is a data, tell it to update; otherwise, create
      let mesureData = this.data.data;
      console.log(mesureData);
      if (mesureData) {
        // Update existing measurement
        this._mesureService.updateMesure(mesureData.id, mesure).subscribe({
          next: (value: any) => {
            if (value) {
              alert('Updated successfully');
              this._dialogRef.close(true);
            }
          },
          error: (error: any) => {
            console.error(error);
          },
        });
      } else {
        // Create new measurement
        console.log('Insert section');

        this._mesureService.addMesure(mesure).subscribe({
          next: (value: any) => {
            alert('Mesure added successfully');
            this._dialogRef.close(true);
          },
          error: (error: any) => {
            console.error(error);
          },
        });
      }
    }
  }
}
