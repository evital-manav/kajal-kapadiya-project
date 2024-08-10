import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ProductComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'add-patient',
    component: AddPatientComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: PatientListComponent },
  {
    path: 'app-products',
    component: ProductComponent,
    canActivate: [AuthGuard],
  },
  { path: 'app-cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'app-login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
