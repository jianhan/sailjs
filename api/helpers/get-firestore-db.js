const admin = require("firebase-admin");
const serviceAccount = require("../../firebase_admin_sdk.json");
let firestoreDB = null

module.exports = {
  friendlyName: 'Get Firestore Database',
  description: 'Returns firestore database instance',
  inputs: {},

  fn: async function (input, exits) {
    if (!firestoreDB) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://vuedz-f4390.firebaseio.com"
      });

      firestoreDB = admin.firestore();
    }

    return exits.success(firestoreDB);
  }
};
