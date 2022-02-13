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
    // const blogCollectionRef = collection(firestore, 'blogs');

    const docRef = doc(firestore, 'blogs', 'pdDvEXsTwYd0cAcJYR1R');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }

    return {
      data: 'Hello',
    };
  },
};
