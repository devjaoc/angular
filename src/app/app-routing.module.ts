import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { env } from 'src/config/env';

const routes: Routes = env.routers;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
