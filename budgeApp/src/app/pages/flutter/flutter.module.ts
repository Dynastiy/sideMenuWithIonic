import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlutterPageRoutingModule } from './flutter-routing.module';

import { FlutterPage } from './flutter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlutterPageRoutingModule
  ],
  declarations: [FlutterPage]
})
export class FlutterPageModule {}
