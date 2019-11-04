import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotverifyfacePage } from './notverifyface.page';

const routes: Routes = [
  {
    path: '',
    component: NotverifyfacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotverifyfacePage]
})
export class NotverifyfacePageModule {}
