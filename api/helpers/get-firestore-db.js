const admin = require("firebase-admin");
const serviceAccount = require("../../firebase_admin_sdk.json");
let firestoreDB = null

module.exports = {
  friendlyName: 'Get firestore database',
  description: 'Returns firestore database instance',
  inputs: {},

  fn: async function (input, exits) {
    if (firestoreDB == null) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://vuedz-f4390.firebaseio.com"
      });

      firestoreDB = admin.firestore();
    }

    return exits.success(firestoreDB);
  }
};
