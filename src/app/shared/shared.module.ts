import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {
  AutoCompleteModule,
  CalendarModule,
  FileUploadModule,
  DialogModule,
  OverlayPanelModule,
  InputTextareaModule,
  DropdownModule,
  RadioButtonModule,
  ToggleButtonModule,
  CheckboxModule,
  InputTextModule,
  AccordionModule,
  ButtonModule,
  SliderModule,
  DataTableModule,
  CarouselModule,
  TabViewModule,
  MultiSelectModule
} from 'primeng/primeng';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    CalendarModule,
    FileUploadModule,
    DialogModule,
    OverlayPanelModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    ToggleButtonModule,
    CheckboxModule,
    InputTextModule,
    AccordionModule,
    ButtonModule,
    SliderModule,
    DataTableModule,
    CarouselModule,
    TabViewModule,
    MultiSelectModule,
    SharedRoutingModule
  ],
  declarations: [
    HeaderComponent,
    SideNavComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  exports: [
    // Default components
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    CalendarModule,
    FileUploadModule,
    DialogModule,
    OverlayPanelModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    ToggleButtonModule,
    CheckboxModule,
    InputTextModule,
    AccordionModule,
    ButtonModule,
    SliderModule,
    DataTableModule,
    CarouselModule,
    TabViewModule,
    MultiSelectModule,
    RouterModule,
    HeaderComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
