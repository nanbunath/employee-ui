import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule,MatSelectModule, MatMenuModule, MatTabsModule, MatTableModule, MatButtonModule, MatCardModule, MatIconModule, MatSortModule, MatOptionModule, MatTooltipModule, MatRadioModule, MatListModule, MatDialogModule, MatDividerModule, MatCheckboxModule, MatGridListModule, MatExpansionModule, MatAutocompleteModule, MatChipsModule, MatSlideToggleModule, MatProgressBarModule, MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTooltipModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatDividerModule,
    MatCheckboxModule,
    MatGridListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
