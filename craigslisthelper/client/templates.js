Meteor.setInterval( function() {
  Session.set('window.innerHeight', window.innerHeight);
  Session.set('window.innerWidth', window.innerWidth);


}, 16);


Meteor.setInterval( function() {
  Session.set('tick', (Session.get('tick') + 1));
}, 60 * 1000);

Deps.autorun(function() {
  Template.craigslist.height = function() {
    return Session.get('window.innerHeight');
  }
});

Deps.autorun(function() {
  Template.craigslist.width = function() {
    return Session.get('window.innerWidth');
  }
});

Deps.autorun(function() {
  Template.craigslist.tick = function() {
    return Session.get('tick');
  }
});
