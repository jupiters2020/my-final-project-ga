// Initialize Firebase
// Your web app's Firebase configuration
<script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"></script>;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD31dQmRDF1Wqw0jMqtdNX5WvGuTH5aG4Y",
  authDomain: "ga-final-project-a8d0a.firebaseapp.com",
  projectId: "ga-final-project-a8d0a",
  storageBucket: "ga-final-project-a8d0a.appspot.com",
  messagingSenderId: "148214925659",
  appId: "1:148214925659:web:6ecc7a0d3d6c341a3d727e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// connect to your Firebase application using your reference URL
var boxAppReference = firebase.database();

// Creating My BoxInput to catch the Autocomplete box being filled in by users
const create = (boxInput) => {
  console.log("creating...", boxInput);
  return db.collection("box-input").add({
    boxInput,
    votes: 0,
  });
};

// catch "submit" for the button

// READ ALL
const readAll = async () => {
  const data = await db.collection("box-input").get();

  const formattedDocs = data.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  console.log("READ ALL", formattedDocs);
  return formattedDocs;
};

// Read one assigned from box-input being pushed to the right column
const readOne = (id) => {
  console.log("reading one...", id);
  return db
    .collection("box-input")
    .doc(id)
    .get()
    .then((data) => data)
    .then((data) => {
      console.log("READ ONE", data.id, data.data());
    });
};

// Updating Votes on the right side from catch of box-input
const updateVotes = (id, votesAdjustment) => {
  console.log("Updating votes...", votesAdjustment);
  return db
    .collection("box-input")
    .doc(id)
    .update({
      votes: firebase.firestore.FieldValue.increment(votesAdjustment),
    });
};

// Update Votes Outright 
const updateVotesTotal = (id, newVotesTotal) => {
  console.log("Updating votes total...");
  return db.collection("messages").doc(id).update({
    votes: newVotesTotal,
  });
};

const doThings = async () => {
  await readAll();
};

doThings();

// For the submit click .event on the submit button class="btn waves-effect waves-light" / .btn, .btn-large,

button.addEventListener('click', (evt) => {
  evt.preventDefault();
  const submit = submitInput.value;
  if (submit === '') {
    alert('You must type in a value!');
  } else {
    addToList(submitList, submit);
    submitList.value = '';
  }
});
};

//load dom

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
onLoadHandler();
}

// // //  NYT API

// import { nytMovApi } from ' js/keys.js';
//   // 1. Retrieve articles from my NYT London API
//   //   - If this fails, display error message
//   // After repeat  { ‘api name’} which is “unexpected document ‘ returns change the const params to definitions?
//   const url = new URL('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=rCBj0jRkg4c319UL64O5AZJnqIlSs0FQ&format=json&media=article&content-type=1&safe_search=1'
//   );
//   const params = {
//     api_key: nytMovApi,
//     format:json,
//     media:'article',
//     content_type: 1,
//     safe_search: 1,
//   };
//   // add query string to URL
//   url.search = new URLSearchParams(params).toString();
//   // fetch resource
//   const rawResponse = await fetch(url);
//   if (!rawResponse.ok) {
//     alert("failed to request Movie Review from NewYorkTimesAPI");
//     // we want to stop execution if there is an error
//     return;
//   }
// //   // transform response into JSON
//   const json = await rawResponse.json();
//   console.log("json", json);
// //   // get features list...
//   const featureList = document.querySelector(".display_title");
//   console.log("a", json.display_title.display_title);
//   json.display_title.display_title
//     .filter((display_title) => {
//       return display_title.title !== "";
//     })
//     .forEach((display_title) => {
// //       // create element
//       const newFeatureElement = document.createElement("feat");
// //       // add src
//       newFeatureElement.src = display_title.url_n;
// //       // add class
//       newFeatureElement.classList.add("feat");
// //       // append to DOM
//       featureList.appendChild(newFeatureElement);
//     });
// //   // 4. For each article returned:
// //   //   - Create `feat` element
// //   //   - Append `feat` element to the DOM
// };
// function onGetPositionFail(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// // DOM is ready for manipulation
const onLoadHandler = () => {
//   // toggle loading view
  document.getElementById("loading-view").classList.remove("hide");

// // Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onLoadHandler);
} else {
  onLoadHandler();
} 
