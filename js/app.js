// // 1st API Attempt

// // import { nytMovApi } from ' js/keys.js';
// //   // 1. Retrieve articles from my NYT London API
// //   //   - If this fails, display error message
// //   // After repeat  { ‘api name’} which is “unexpected document ‘ returns change the const params to definitions?
// //   const url = new URL('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=rCBj0jRkg4c319UL64O5AZJnqIlSs0FQ&display_title=string&critics_pick=integer&headline=string&summary_short=string'
// //   );
// //   const params = {
// //     api_key: nytMovApi,
// //     display_title: string;
// //     source: 'The New York Times',
// //     critics_pick: string,
// //     format: 'json',
// //     headline: string,
// //     summary_short: string,
// //     nojsoncallback: 1, // need this because we don't want jsonp
// //   };
// //   // add query string to URL
// //   url.search = new URLSearchParams(params).toString();
// //   // fetch resource
// //   const rawResponse = await fetch(url);
// //   if (!rawResponse.ok) {
// //     alert("failed to request Movie Review from NewYorkTimesAPI");
// //     // we want to stop execution if there is an error
// //     return;
// //   }
// // //   // transform response into JSON
// //   const json = await rawResponse.json();
// //   console.log("json", json);
// // //   // get features list...
// //   const featureList = document.querySelector(".display_title");
// //   console.log("a", json.display_title.display_title);
// //   json.display_title.display_title
// //     .filter((display_title) => {
// //       return display_title.title !== "";
// //     })
// //     .forEach((display_title) => {
// // //       // create element
// //       const newFeatureElement = document.createElement("feat");
// // //       // add src
// //       newFeatureElement.src = display_title.url_n;
// // //       // add class
// //       newFeatureElement.classList.add("feat");
// // //       // append to DOM
// //       featureList.appendChild(newFeatureElement);
// //     });
// // //   // 4. For each article returned:
// // //   //   - Create `feat` element
// // //   //   - Append `feat` element to the DOM
// // };
// // function onGetPositionFail(err) {
// //   console.warn(`ERROR(${err.code}): ${err.message}`);
// // }

// // // // DOM is ready for manipulation
// // const onLoadHandler = () => {
// // //   // toggle loading view
// //   document.getElementById("loading-view").classList.remove("hide");

// // // // Wait for DOM to be ready
// // if (document.readyState === "loading") {
// //   document.addEventListener("DOMContentLoaded", onLoadHandler);
// // } else {
// //   onLoadHandler();
// // }

// // API 1

// const nytMovApi = "rCBj0jRkg4c319UL64O5AZJnqIlSs0FQ";
// const urlMovApi = 'https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=rCBj0jRkg4c319UL64O5AZJnqIlSs0FQ&display_title=string&critics_pick=integer&headline=string&summary_short=string';

// (() => {
//   const makeRequest = async (urlMovApi) => {
//     try {
//       // fetch the raw response
//       const rawResponse = await fetch(urlMovApi);
//       if (!rawResponse.ok) {
//         throw new Error("response not ok");
//       }

//       // if we made it this far, we're ok
//       const jsonResponse = await rawResponse.json();
//       console.log("jsonResponse", jsonResponse);
//     } catch (err) {
//       console.log("err", err);
//     }
//   };

//   const onLoadHandler = () => {
//     document
//       .getElementById(movieReviews)
//       .addEventListener("click", (evt) => {
//         console.log("making request");
//         makeRequest(
//           "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=rCBj0jRkg4c319UL64O5AZJnqIlSs0FQ&display_title=string&critics_pick=integer&headline=string&summary_short=string"
//         );
//       });

//     movieReviews();

//   // only run onLoadHandler if DOM is loaded
//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", onLoadHandler);
//   } else {
//     onLoadHandler();
//   }
// });

/**
 * requestAnimationFrame polyfill by Erik Möller & Paul Irish et. al.
 * https://gist.github.com/1866474
 *
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 **/

/*jshint asi: false, browser: true, curly: true, eqeqeq: true, forin: false, newcap: true, noempty: true, strict: true, undef: true */

(function (window) {
  "use strict";

  var lastTime = 0;
  var prefixes = "webkit moz ms o".split(" ");
  // get unprefixed rAF and cAF, if present
  var requestAnimationFrame = window.requestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame;
  // loop through vendor prefixes and get prefixed rAF and cAF
  var prefix;
  for (var i = 0; i < prefixes.length; i++) {
    if (requestAnimationFrame && cancelAnimationFrame) {
      break;
    }
    prefix = prefixes[i];
    requestAnimationFrame =
      requestAnimationFrame || window[prefix + "RequestAnimationFrame"];
    cancelAnimationFrame =
      cancelAnimationFrame ||
      window[prefix + "CancelAnimationFrame"] ||
      window[prefix + "CancelRequestAnimationFrame"];
  }

  // fallback to setTimeout and clearTimeout if either request/cancel is not supported
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    cancelAnimationFrame = function (id) {
      window.clearTimeout(id);
    };
  }

  // put in global namespace
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
})(window);
