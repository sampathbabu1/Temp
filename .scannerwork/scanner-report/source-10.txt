import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'app-dialog',
  styleUrls: ['dialog.component.css'],
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(
    // enterAnimationDuration: string,
    // exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogAnimationsExampleDialog, {});
  }
}

@Component({
  selector: 'dialog',
  templateUrl: 'dialogExample.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
