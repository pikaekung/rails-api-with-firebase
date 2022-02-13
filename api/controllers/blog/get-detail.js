const { initializeApp } = require('firebase/app');
const { getFirestore, doc, collection, getDoc } = require('firebase/firestore');

module.exports = {
  friendlyName: 'List',
  description: 'List blog.',
  inputs: {},
  exits: {},

  fn: async function () {
    const app = initializeApp({
      apiKey: 'AIzaSyBRjaLVrZJPkEi8zXTv-wXEL7aGw-01_y0',
      authDomain: 'akip-website.firebaseapp.com',
      projectId: 'akip-website',
      storageBucket: 'akip-website.appspot.com',
      messagingSenderId: '852812497776',
      appId: '1:852812497776:web:4696cbbc734fc6e473c5b5',
      measurementId: 'G-9LKFVLVSDB',
    });

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
