// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  laravel:{
    baseUrl:'http://localhost:8000',
    api:'/api',
    book_search:'/book',
    book_get:'/book/all',
    book_post:'/book/post',
    login:'/login',
    register:'/register',
    book_delete:'/book/delete',
    book_update:'/book/put'
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
