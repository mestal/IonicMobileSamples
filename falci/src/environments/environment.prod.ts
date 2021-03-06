// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  baseUrl: 'https://backend.falcim.xyz/api/',
  urlForAssets: 'https://backend.falcim.xyz/',
  platform: 'browser',
  apiUrls: {
    getFortuneTellers: 'FortuneTelling/GetFortuneTellers',
    getActiveFortuneTellers: 'FortuneTelling/GetActiveFortuneTellers',
    getFortuneTellings: 'FortuneTelling/GetUserItems',
    getFalciFortuneTellings: 'FortuneTelling/GetFortuneTellerItems',
    getFortuneTelling: 'FortuneTelling/GetFortuneTellingById',
    getFortuneTeller: 'FortuneTelling/GetFortuneTeller',
    getFeeds: 'Feed/GetFeeds',
    getSurvey: 'Feed/GetSurvey',
    getNews: 'Feed/GetNews',
    getComments: 'Feed/GetComments',
    submitCoffeeFortuneTelling: 'FortuneTelling/SubmitCoffeeFortuneTelling',
    submitByFortuneTeller: 'FortuneTelling/SubmitByFortuneTeller',
    submitComment: 'Feed/SubmitComment',
    removeComment: 'Feed/RemoveComment',
    submitLike: 'Feed/LikeFeed',
    removeLike: 'Feed/RemoveLikeFeed',
    rateFortuneTeller: 'FortuneTelling/RateFortuneTeller'
  },
  feedsPageSize: 20
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

