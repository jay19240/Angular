import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';

import { ContentModule } from './content/content.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoTopModule } from './go-top/go-top.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContentModule,
    RouterModule,
    GoTopModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class MainModule { }
