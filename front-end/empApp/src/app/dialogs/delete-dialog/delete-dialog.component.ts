import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: JsonDataService) { }

  ngOnInit(): void {
  }
  
  onNoClick(){this.dialogRef.close();}
  confirmDelete(){this.dataService.deleteEmployee(this.data.id?.toString())
    
    ;}
}
