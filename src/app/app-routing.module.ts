import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent, ListDetailsComponent } from './modules/list/components';

const routes: Routes = [
  {
    path: '' , redirectTo:'list', pathMatch: 'full'

  },
  {
    path: 'list' ,component: ListComponent,

  },
  {
    path: 'list-details',
    component: ListDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
