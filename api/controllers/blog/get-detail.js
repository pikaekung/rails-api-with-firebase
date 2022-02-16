const { initializeApp } = require('firebase/app');
const { getFirestore, doc, collection, getDoc } = require('firebase/firestore');

module.exports = {
  friendlyName: 'List',
  description: 'List blog.',
  inputs: {},
  exits: {},

  fn: async function () {
    const app = initializeApp(sails.config.firebase);
    const firestore = getFirestore(app);

    const id = this.req.params.id;
    const docRef = doc(firestore, 'blogs', id);
    const docSnap = await getDoc(docRef);

    let dataRespons = {};
    if (docSnap.exists()) {
      dataRespons = {
        id: docSnap.id,
        blog: docSnap.data(),
      };
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }

    return {
      status_code: 200,
      status_text: 'Get blog data.',
      data: dataRespons,
    };
  },
};
