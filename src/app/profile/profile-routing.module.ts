import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
// import { SettingsComponent } from './pages/settings/settings.component';

const profileRoutes: Routes = [
  {path: '', component: ProfileComponent},
  // {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }
