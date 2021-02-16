var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

import firebase from "firebase/app";
import "firebase/firestore";

import { firebaseKeys } from "/js/keys.js";

firebase.initializeApp(firebaseKeys);

const db = firebase.firestore();

export const boxInput = {
  updateVotes: (id, amount) => {
    return db
      .collection("box-input")
      .doc(id)
      .update({
        votes: firebase.firestore.FieldValue.increment(amount),
      });
  },
  delete: (id) => {
    return db.collection("box-input").doc(id).delete();
  },
  create: (boxInput) => {
    return db.collection("box-input").add({
      boxInput,
      votes: 0,
    });
  },
  getAll: () => {
    return db
      .collection("box-input")
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
      });
  },
};
