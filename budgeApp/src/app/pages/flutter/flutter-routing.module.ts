import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlutterPage } from './flutter.page';

const routes: Routes = [
  {
    path: '',
    component: FlutterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlutterPageRoutingModule {}
