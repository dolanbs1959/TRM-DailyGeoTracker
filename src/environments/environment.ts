// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: 'b7gwzr_dcp8_0_wdtn69bpr52rkc6x4hgbdyw5zkw',
  baseUrl: 'https://api.quickbase.com/v1/records',
  realm: 'bobfaulk.quickbase.com', //bobfaulk.quickbase.com
  appId: 'bim8pha2e',//TRM app
  queryTableId: 'bim8phbu3', //Employee table
  insertTableId: 'bim8pha9u',//Notes table, update to actual table prod ver.
  QUICKBASE_URL: 'https://api.quickbase.com/v1/records/query',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
