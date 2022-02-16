const { initializeApp } = require('firebase/app');
const { getFirestore, doc, collection, setDoc } = require('firebase/firestore');

module.exports = {
  friendlyName: 'New',
  description: 'New blog.',
  inputs: {},
  exits: {},

  fn: async function () {
    const app = initializeApp(sails.config.firebase);
    const firestore = getFirestore(app);
    const blogsRef = collection(firestore, 'blogs');

    await setDoc(doc(blogsRef), {
      title: 'CRUD Operations Using Sails.js and Google Cloud Firestore',
      description: 'CRUD operations using Sails.js and Google Cloud Firestore.',
      headline: 'CRUD operations using Sails.js and Google Cloud Firestore',
      content: `<p>
      After this <a [routerLink]="['/blog/design-dynamic-blog-content']">blog</a>. I start to create a new project API with the Sails.JS and Google FireStore.
      I will try to learn, How to code RestfulAPI with NodeJs Framework? 
      You can check out this code from here <a href="https://github.com/pikaekung/rails-api-with-firebase" target="_blank">Github</a>.
      But it's not done yet. Next, I will start to create a new blog with Sails.js model and use it for this web.
  </p>
  
  <p>
      I still have a issue with FireStore. It's not used any permission to create collections and documents in FireStore. If you know ProjectId key you can create it.
      It does not make sense.
  </p>`,
      created_at: new Date(),
      publish: true,
    });

    // All done.
    return {
      data: `Create new blog success.`,
    };
  },
};
