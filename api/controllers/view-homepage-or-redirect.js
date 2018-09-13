module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage'
    },

    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },

  },


  fn: async function (inputs, exits) {
    var firestore = await sails.helpers.getFirestoreDb();
    var docRef = firestore.collection('users').doc('alovelace');
    var setAda = docRef.set({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
    });

    sails.log("***********",setAda);
    if (this.req.me) {
      throw {redirect:'/welcome'};
    }

    return exits.success();

  }


};
