import { Component, ViewChild } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import {
  faPenSquare,
  faTrash,
  faPlusCircle,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mesures } from '../mesures';
import { MesuresService } from './../services/mesures.service';
import { MesuresFormComponent } from '../mesures-form/mesures-form.component';

@Component({
  selector: 'app-mesures',
  templateUrl: './mesures.component.html',
  styleUrls: ['./mesures.scss'],
  providers: [MatTableDataSource],
})
export class MesuresComponent {
  //initialisation
  mesures!: Mesures[];

  faPenSquare = faPenSquare;
  faTrash = faTrash;
  faEdit = faEdit;
  faEye = faEye;
  faPlusCircle = faPlusCircle;
  constructor(
    private mesureService: MesuresService,
    private _dialog: MatDialog,
    public dataSource: MatTableDataSource<any>
  ) {}
  ngOnInit(): void {
    this.getMesures();
  }
  //for mat table
  displayedColumns: string[] = [
    'id',
    'avantBras',
    'biceps',
    'cheville',
    'cou',
    'coude',
    'coutureExt',
    'cuisse',
    'entreJambes',
    'epaules',
    'genou',
    'hanches',
    'htotale',
    'lbras',
    'lcorps',
    'poitrine',
    'poignet',
    'creteIliaques',
    'dessousPoids',
    'tete',
    'dtypes',
    'ldos',
    'client',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //dialog part
  openDialogForm() {
    const dialogRef = this._dialog.open(MesuresFormComponent, {
      data: { data: null, eyeOpen: true },
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //whenever i close the dialog dialog my table
          //must be refreshed in register component i'll check if it's true or not
          this.getMesures();
        }
      },
    });
  }

  openEditForm(data: any, eyeOpen: boolean = true) {
    console.log('data after clicking edit btn');
    console.log(data);
    const dialogRef = this._dialog.open(MesuresFormComponent, {
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
          this.getMesures();
        }
      },
    });
  }
  getALLMesures() {
    this.mesureService.getListOfAllMesures().subscribe((data) => {
      // it's an ansynchronous response i'm gonna handle it
      //or set it to my client i defined below
      this.mesures = data;
      //getting from ViewChild
      data.map((item) => {
        console.log(item);
      });
      this.dataSource = new MatTableDataSource(this.mesures);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  getMesures() {
    this.mesureService.getListOfAllMesures().subscribe({
      next: (res) => {
        res.map((item) => {
          console.log(item);
        });
        //getting from ViewChild
        this.dataSource = new MatTableDataSource(res);
        //console.log(this.dataSource);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res);
      },
      error: (error) => {
        console.log(`list mesures error ${error}`);
      },
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

  deleteMesure(id: number) {
    let text: string = 'Do you want to delete this user';
    if (confirm(text)) {
      this.mesureService.deleteMesureById(id).subscribe({
        next: (val: any) => {
          if (val) {
            alert('Deleted successfully');
            this.getMesures();
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
