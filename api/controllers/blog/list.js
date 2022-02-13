const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  collection,
  query,
  getDocs,
} = require('firebase/firestore');

module.exports = {
  friendlyName: 'List',
  description: 'List blog.',
  inputs: {},
  exits: {},

  fn: async function () {
    const app = initializeApp(sails.config.firebase);
    const firestore = getFirestore(app);

    const collectionRef = collection(firestore, 'blogs');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });

    return {
      data: 'Hello',
    };
  },
};
