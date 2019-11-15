import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  { path: '', redirectTo: 'result', pathMatch: 'full' },

  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'book-new', loadChildren: './book-new/book-new.module#BookNewPageModule' },
  { path: 'delete-book', loadChildren: './delete-book/delete-book.module#DeleteBookPageModule' },
  { path: 'update-book', loadChildren: './update-book/update-book.module#UpdateBookPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
