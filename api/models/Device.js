/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: 'device',
  attributes: {
  name: {
    type: 'string',
  },
  uuid: {
    type: 'string',
  },
  major: {
    type: 'string',
  },
  minor: {
    type: 'string',
  },
  cbjTag: {
    type: 'string',
    defaultsTo: ''
  },
  access: {
    type: 'integer',
    defaultsTo: 0,
    required: true
  }
  }
}


