import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    DataService
  ],
  declarations: []
})
export class ServicesModule { }
