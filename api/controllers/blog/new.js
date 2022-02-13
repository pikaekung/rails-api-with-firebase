const { initializeApp } = require('firebase/app');
const { getFirestore, doc, collection, setDoc } = require('firebase/firestore');

module.exports = {
  friendlyName: 'New',
  description: 'New blog.',
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
    const citiesRef = collection(firestore, 'cities');

    await setDoc(doc(citiesRef, 'SF'), {
      name: 'San Francisco',
      state: 'CA',
      country: 'USA',
      capital: false,
      population: 860000,
      regions: ['west_coast', 'norcal'],
    });
    await setDoc(doc(citiesRef, 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      capital: false,
      population: 3900000,
      regions: ['west_coast', 'socal'],
    });
    await setDoc(doc(citiesRef, 'DC'), {
      name: 'Washington, D.C.',
      state: null,
      country: 'USA',
      capital: true,
      population: 680000,
      regions: ['east_coast'],
    });
    await setDoc(doc(citiesRef, 'TOK'), {
      name: 'Tokyo',
      state: null,
      country: 'Japan',
      capital: true,
      population: 9000000,
      regions: ['kanto', 'honshu'],
    });
    await setDoc(doc(citiesRef, 'BJ'), {
      name: 'Beijing',
      state: null,
      country: 'China',
      capital: true,
      population: 21500000,
      regions: ['jingjinji', 'hebei'],
    });
    // All done.
    return;
  },
};
