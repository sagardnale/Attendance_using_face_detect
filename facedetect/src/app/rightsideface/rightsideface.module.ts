import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RightsidefacePage } from './rightsideface.page';

const routes: Routes = [
  {
    path: '',
    component: RightsidefacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RightsidefacePage]
})
export class RightsidefacePageModule {}
