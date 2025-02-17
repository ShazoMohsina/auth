// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};

/*export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAkFfZlTp00Mc-1h68gNRg_4_UpzLvIeBc',
    authDomain: 'educative-auth-angular.firebaseapp.com',
    databaseURL: 'educative-auth-angular.firebaseapp.com',
    projectId: 'educative-auth-angular',
    storageBucket: 'educative-auth-angular.appspot.com',
    messagingSenderId: '204047671775'
  }
};*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
