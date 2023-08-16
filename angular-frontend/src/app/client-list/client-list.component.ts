import { Component, ViewChild } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import {
  faPenSquare,
  faTrash,
  faPlusCircle,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Client } from '../client';
import { MatDialog } from '@angular/material/dialog';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientsService } from '../services/clients.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',

  styleUrls: ['./list.scss'],
  providers: [MatTableDataSource],
})
export class ClientListComponent {
  //initialisation
  clients!: Client[];
  roles: string[] = [];
  role?: any;
  faPenSquare = faPenSquare;
  faTrash = faTrash;
  faEdit = faEdit;
  faEye = faEye;
  faPlusCircle = faPlusCircle;
  isModerator: boolean = false;
  //after creating my service file and put the necessary code
  //code inside i'm gonna inject then
  constructor(
    private clientService: ClientsService,
    private _dialog: MatDialog,
    public dataSource: MatTableDataSource<any>,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    //call my methods here
    this.getClients();
    this.roles = this.storageService.getUser();
    console.log(`get role ${this.storageService.geRole('ROLE_MODERATOR')}`);
    console.log(this.roles);
    // j'ai un objet dans role je veux recuperer roles
    /* for (let item in this.roles) {
      if (item === 'roles') {
        this.role = this.roles[item];
      }
    }
    this.role.includes('ROLE_MODERATOR')
      ? (this.isModerator = true)
      : this.isModerator; plus besoin */
    this.storageService.geRole('ROLE_MODERATOR')
      ? (this.isModerator = true)
      : this.isModerator;
  }
  //for mat table
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
    'phone',
    'adresse',
    'email',
    'cni',
    'sexe',
    'status',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //dialog part
  openDialogForm() {
    const dialogRef = this._dialog.open(RegisterFormComponent, {
      data: { data: null, eyeOpen: true },
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //whenever i close the dialog dialog my table
          //must be refreshed in register component i'll check if it's true or not
          this.getClients();
        }
      },
    });
  }

  openEditForm(data: any, eyeOpen: boolean = true) {
    const dialogRef = this._dialog.open(RegisterFormComponent, {
      data: {
        data,
        eyeOpen,
      },
    });
    // so now how i'm gonna receive the data let's jump then in register component
    // little i'm gonna inject
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //whenever i close the dialog dialog my table
          //must be refreshed in register component i'll check if it's true or not
          this.getClients();
        }
      },
    });
  }
  getClients() {
    this.clientService.getListOfAllClients().subscribe((data) => {
      // it's an ansynchronous response i'm gonna handle it
      //or set it to my client i defined below
      this.clients = data;
      //getting from ViewChild
      this.dataSource = new MatTableDataSource(this.clients);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  // filter from matTable
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(id: number) {
    let text: string = 'Do you want to delete this user';
    if (confirm(text)) {
      this.clientService.deleteClientById(id).subscribe({
        next: (val: any) => {
          if (val) {
            alert('Deleted successfully');
            this.getClients();
          }
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    } else {
      alert('Not deleted');
    }
  }
}
