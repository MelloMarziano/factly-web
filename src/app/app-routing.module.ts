import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { authGuard } from './core/guards/auth/auth.guard';
// import { noAuthGuard } from './core/guards/no-auth/no-auth.guard';

const routes: Routes = [
  // {
  //   path: 'private',
  //   canActivate: [authGuard],
  //   loadChildren: () =>
  //     import('./features/private/private.module').then((m) => m.PrivateModule),
  // },
  {
    path: 'public',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },

  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: '**', redirectTo: 'public' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
