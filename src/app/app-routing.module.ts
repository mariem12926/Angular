import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'emploi',component:OffresEmploiComponentComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
