import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'verifyface', loadChildren: './verifyface/verifyface.module#VerifyfacePageModule' },
  { path: 'registerface', loadChildren: './registerface/registerface.module#RegisterfacePageModule' },
  { path: 'leftsideface', loadChildren: './leftsideface/leftsideface.module#LeftsidefacePageModule' },
  { path: 'frontsideface', loadChildren: './frontsideface/frontsideface.module#FrontsidefacePageModule' },
  { path: 'rightsideface', loadChildren: './rightsideface/rightsideface.module#RightsidefacePageModule' },
  { path: 'lastfaceregister', loadChildren: './lastfaceregister/lastfaceregister.module#LastfaceregisterPageModule' },
  { path: 'notverifyface', loadChildren: './notverifyface/notverifyface.module#NotverifyfacePageModule' },
  { path: 'setuppin', loadChildren: './setuppin/setuppin.module#SetuppinPageModule' },
  { path: 'finalizesetup', loadChildren: './finalizesetup/finalizesetup.module#FinalizesetupPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
