import { DialogueAjouterEmployeComponent } from './../dialogue-ajouter-employe/dialogue-ajouter-employe.component';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeService } from './../employee.service';

interface listeEmployes {
  ID:string;
  FirstName:string;
  LastName:string;
}
let ELEMENT_DATA: listeEmployes[] = [
];
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  displayedColumns: string[] = ['ID','LastName', 'FirstName','Action'];
  dataSource:any
  data:any
  listeCategories: any[] = []
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog,private employeeService:EmployeeService) {
    this.AfficherEmploye();
   }

  AfficherEmploye(){
    
    this.employeeService.employee().subscribe((employes: any) => {
      console.log("employes")
      ELEMENT_DATA = employes;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);

  
   });


  //   ELEMENT_DATA =   [{ID: "k4541", LastName: 'jebbour', FirstName: 'hamza'},
  //   {ID: "11de1", LastName: 'moudni', FirstName: 'alae'},
  //   {ID: "w88kw", LastName: 'bakkali', FirstName: 'said'},
  //   {ID: "s5555", LastName: 'jebbour', FirstName: 'rachid'},
  // ];

  }
  openDialog() {
    let dialogRef=this.dialog.open(DialogueAjouterEmployeComponent);
    dialogRef.afterClosed().subscribe(() => { this.AfficherEmploye(); } );
  }
 deleteEmploye(id:any){

}

updateEmploye(produit:any){


}
updateImageEmploye(produit:any){


}

  ngOnInit(): void {
  
  }

}
