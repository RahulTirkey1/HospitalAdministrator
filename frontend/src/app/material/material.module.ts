import { NgModule } from "@angular/core";

//=================================== ANGULAR MATERIAL MODULES & GLOBAL USING MODULES ==================================//
// Import modules which are used in child components

// MATERIAL MODULES
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';

// ANGULAR MODULES
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatSidenavModule,
    A11yModule,
    ClipboardModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatSidenavModule,
    A11yModule,
    ClipboardModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule
  ]
})
export class MaterialModule {}