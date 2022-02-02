import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
    message: string = "Are you sure?"
    confirmButtonText = "Yes"
    cancelButtonText = "Cancel"

    constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

    onConfirmClick(): void {
        this.dialogRef.close(true);
    }

    ngOnInit(): void {
    }
}
