var require = meteorInstall({"lib":{"collections.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// lib/collections.js                                                                         //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.export({Chats:function(){return Chats},Messages:function(){return Messages}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                              //
var Chats = new Mongo.Collection('chats');                                                    // 3
var Messages = new Mongo.Collection('messages');                                              // 4
////////////////////////////////////////////////////////////////////////////////////////////////

}],"methods.js":["meteor/meteor","meteor/check","../lib/collections",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// lib/methods.js                                                                             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});var Chats,Messages;module.import('../lib/collections',{"Chats":function(v){Chats=v},"Messages":function(v){Messages=v}});
                                                                                              // 2
                                                                                              // 3
                                                                                              //
Meteor.methods({                                                                              // 5
  newMessage: function () {                                                                   // 6
    function newMessage(message) {                                                            // 5
      if (!this.userId) {                                                                     // 7
        throw new Meteor.Error('not-logged-in', 'Must be logged in to send message.');        // 8
      }                                                                                       // 10
                                                                                              //
      check(message, Match.OneOf({                                                            // 12
        text: String,                                                                         // 14
        type: String,                                                                         // 15
        chatId: String                                                                        // 16
      }, {                                                                                    // 13
        picture: String,                                                                      // 19
        type: String,                                                                         // 20
        chatId: String                                                                        // 21
      }));                                                                                    // 18
                                                                                              //
      message.timestamp = new Date();                                                         // 25
      message.userId = this.userId;                                                           // 26
                                                                                              //
      var messageId = Messages.insert(message);                                               // 28
      Chats.update(message.chatId, { $set: { lastMessage: message } });                       // 29
                                                                                              //
      return messageId;                                                                       // 31
    }                                                                                         // 32
                                                                                              //
    return newMessage;                                                                        // 5
  }(),                                                                                        // 5
  updateName: function () {                                                                   // 33
    function updateName(name) {                                                               // 5
      if (!this.userId) {                                                                     // 34
        throw new Meteor.Error('not-logged-in', 'Must be logged in to update his name.');     // 35
      }                                                                                       // 37
                                                                                              //
      check(name, String);                                                                    // 39
                                                                                              //
      if (name.length === 0) {                                                                // 41
        throw Meteor.Error('name-required', 'Must provide a user name');                      // 42
      }                                                                                       // 43
                                                                                              //
      return Meteor.users.update(this.userId, { $set: { 'profile.name': name } });            // 45
    }                                                                                         // 46
                                                                                              //
    return updateName;                                                                        // 5
  }(),                                                                                        // 5
  newChat: function () {                                                                      // 47
    function newChat(otherId) {                                                               // 5
      if (!this.userId) {                                                                     // 48
        throw new Meteor.Error('not-logged-in', 'Must be logged to create a chat.');          // 49
      }                                                                                       // 51
                                                                                              //
      check(otherId, String);                                                                 // 53
      var otherUser = Meteor.users.findOne(otherId);                                          // 54
                                                                                              //
      if (!otherUser) {                                                                       // 56
        throw new Meteor.Error('user-not-exists', 'Chat\'s user not exists');                 // 57
      }                                                                                       // 59
                                                                                              //
      var chat = {                                                                            // 61
        userIds: [this.userId, otherId],                                                      // 62
        createdAt: new Date()                                                                 // 63
      };                                                                                      // 61
                                                                                              //
      var chatId = Chats.insert(chat);                                                        // 66
                                                                                              //
      return chatId;                                                                          // 68
    }                                                                                         // 69
                                                                                              //
    return newChat;                                                                           // 5
  }(),                                                                                        // 5
  removeChat: function () {                                                                   // 70
    function removeChat(chatId) {                                                             // 5
      if (!this.userId) {                                                                     // 71
        throw new Meteor.Error('not-logged-in', 'Must be logged to create a chat.');          // 72
      }                                                                                       // 74
                                                                                              //
      check(chatId, String);                                                                  // 76
                                                                                              //
      var chat = Chats.findOne(chatId);                                                       // 78
                                                                                              //
      if (!chat || !_.include(chat.userIds, this.userId)) {                                   // 80
        throw new Meteor.Error('chat-not-exists', 'Chat not exists');                         // 81
      }                                                                                       // 83
                                                                                              //
      Messages.remove({ chatId: chatId });                                                    // 85
                                                                                              //
      return Chats.remove({ _id: chatId });                                                   // 87
    }                                                                                         // 88
                                                                                              //
    return removeChat;                                                                        // 5
  }(),                                                                                        // 5
  updatePicture: function () {                                                                // 89
    function updatePicture(data) {                                                            // 5
      if (!this.userId) {                                                                     // 90
        throw new Meteor.Error('not-logged-in', 'Must be logged in to update his picture.');  // 91
      }                                                                                       // 93
                                                                                              //
      check(data, String);                                                                    // 95
                                                                                              //
      return Meteor.users.update(this.userId, { $set: { 'profile.picture': data } });         // 97
    }                                                                                         // 98
                                                                                              //
    return updatePicture;                                                                     // 5
  }()                                                                                         // 5
});                                                                                           // 5
////////////////////////////////////////////////////////////////////////////////////////////////

}]},"server":{"bootstrap.js":["meteor/meteor","meteor/accounts-base",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// server/bootstrap.js                                                                        //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});
                                                                                              // 2
                                                                                              //
Meteor.startup(function () {                                                                  // 4
  if (Meteor.users.find().count() != 0) return;                                               // 5
                                                                                              //
  Accounts.createUserWithPhone({                                                              // 7
    phone: '+972501234567',                                                                   // 8
    profile: {                                                                                // 9
      name: 'My friend 1'                                                                     // 10
    }                                                                                         // 9
  });                                                                                         // 7
                                                                                              //
  Accounts.createUserWithPhone({                                                              // 14
    phone: '+972501234568',                                                                   // 15
    profile: {                                                                                // 16
      name: 'My friend 2'                                                                     // 17
    }                                                                                         // 16
  });                                                                                         // 14
                                                                                              //
  Accounts.createUserWithPhone({                                                              // 21
    phone: '+972501234569',                                                                   // 22
    profile: {                                                                                // 23
      name: 'My friend 3'                                                                     // 24
    }                                                                                         // 23
  });                                                                                         // 21
});                                                                                           // 27
////////////////////////////////////////////////////////////////////////////////////////////////

}],"publications.js":["meteor/meteor","../lib/collections",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// server/publications.js                                                                     //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Chats,Messages;module.import('../lib/collections',{"Chats":function(v){Chats=v},"Messages":function(v){Messages=v}});
                                                                                              // 2
                                                                                              //
Meteor.publish('users', function () {                                                         // 4
  return Meteor.users.find({}, { fields: { profile: 1 } });                                   // 5
});                                                                                           // 6
                                                                                              //
Meteor.publishComposite('chats', function () {                                                // 8
  if (!this.userId) return;                                                                   // 9
                                                                                              //
  return {                                                                                    // 11
    find: function () {                                                                       // 12
      function find() {                                                                       // 11
        return Chats.find({ userIds: this.userId });                                          // 13
      }                                                                                       // 14
                                                                                              //
      return find;                                                                            // 11
    }(),                                                                                      // 11
                                                                                              //
    children: [{                                                                              // 15
      find: function () {                                                                     // 17
        function find(chat) {                                                                 // 16
          return Messages.find({ chatId: chat._id });                                         // 18
        }                                                                                     // 19
                                                                                              //
        return find;                                                                          // 16
      }()                                                                                     // 16
    }, {                                                                                      // 16
      find: function () {                                                                     // 22
        function find(chat) {                                                                 // 21
          var query = { _id: { $in: chat.userIds } };                                         // 23
          var options = { fields: { profile: 1 } };                                           // 24
                                                                                              //
          return Meteor.users.find(query, options);                                           // 26
        }                                                                                     // 27
                                                                                              //
        return find;                                                                          // 21
      }()                                                                                     // 21
    }]                                                                                        // 21
  };                                                                                          // 11
});                                                                                           // 31
////////////////////////////////////////////////////////////////////////////////////////////////

}],"sms.js":["meteor/meteor","meteor/accounts-base",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// server/sms.js                                                                              //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});
                                                                                              // 2
                                                                                              //
if (Meteor.settings && Meteor.settings.ACCOUNTS_PHONE) {                                      // 4
  Accounts._options.adminPhoneNumbers = Meteor.settings.ACCOUNTS_PHONE.ADMIN_NUMBERS;         // 5
  Accounts._options.phoneVerificationMasterCode = Meteor.settings.ACCOUNTS_PHONE.MASTER_CODE;
}                                                                                             // 7
////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/collections.js");
require("./lib/methods.js");
require("./server/bootstrap.js");
require("./server/publications.js");
require("./server/sms.js");
//# sourceMappingURL=app.js.map
