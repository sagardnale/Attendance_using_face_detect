import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FrontsidefacePage } from './frontsideface.page';

const routes: Routes = [
  {
    path: '',
    component: FrontsidefacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FrontsidefacePage]
})
export class FrontsidefacePageModule {}
