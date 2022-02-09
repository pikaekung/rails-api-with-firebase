module.exports = {
  friendlyName: 'Get detail',

  description: 'Get blog detail search by id.',

  inputs: {},

  exits: {},

  fn: async function () {
    let paramId = +this.req.param('id');
    // All done.
    return {
      id: paramId,
    };
  },
};
