import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { InspectorComponent } from './inspector/components/inspector/inspector.component';
import { SettingsComponent } from './settings/components/settings/settings.component';

const routes: Route[] = [
  {
    path: 'inspector',
    loadChildren: './inspector/inspector.module#InspectorModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },
  { path: '', redirectTo: '/inspector', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
