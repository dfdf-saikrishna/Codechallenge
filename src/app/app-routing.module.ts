import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/rentcar/rentcar.module').then(m => m.RentcarPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule) },
  { path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
  { path: 'rentcar', loadChildren: () => import('./pages/rentcar/rentcar.module').then(m => m.RentcarPageModule) },
  { path: 'cars-list', loadChildren: () => import('./pages/cars-list/cars-list.module').then(m => m.CarsListPageModule) },
  { path: 'car-detail/:id', loadChildren: () => import('./pages/car-detail/car-detail.module').then(m => m.CarDetailPageModule) },
  { path: 'car-checkout/:carshopID/:carID', loadChildren: () => import('./pages/car-checkout/car-checkout.module').then(m => m.CarCheckoutPageModule) },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
