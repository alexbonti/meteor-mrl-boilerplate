// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'MRL Meteor Boilerplate',
  DESCRIPTION: 'A customized meteor boilerplate for IBM projects basd on MatteoDem original work'
};
