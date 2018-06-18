import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  imports: [CommonModule, SettingsRoutingModule],
  declarations: [SettingsComponent]
})
export class SettingsModule {}
