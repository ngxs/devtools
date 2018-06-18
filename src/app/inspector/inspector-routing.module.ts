import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectorComponent } from './components/inspector/inspector.component';

const routes: Routes = [{ path: '', component: InspectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectorRoutingModule {}
