const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  collection,
  query,
  orderBy,
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
    const q = query(collectionRef, orderBy('created_at', 'desc'));
    const querySnapshot = await getDocs(q);

    let data = [];
    querySnapshot.forEach((doc) => {
      let blog = doc.data();
      data.push({
        id: doc.id,
        friendly_url: blog.friendly_url,
        headline: blog.headline,
      });
    });

    return {
      status_code: 200,
      status_text: 'Get blog list.',
      data: data,
    };
  },
};
