import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantsComponent } from './form-etudiants/form-etudiants.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
  EtudiantsComponent,
  FormEtudiantsComponent,
  SearchComponent
  ],
  imports: [
    CommonModule,
    EtudiantsRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ]
})
export class EtudiantsModule { }

