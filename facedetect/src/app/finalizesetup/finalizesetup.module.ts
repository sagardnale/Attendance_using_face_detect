import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinalizesetupPage } from './finalizesetup.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizesetupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinalizesetupPage]
})
export class FinalizesetupPageModule {}
