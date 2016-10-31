var require = meteorInstall({"client":{"scripts":{"lib":{"app.js":["angular-animate","angular-meteor","angular-meteor-auth","angular-moment","angular-sanitize","angular-ui-router","ionic-scripts","angular","angular-ecmascript/module-loader","meteor/meteor","../controllers/chats.controller","../controllers/chat.controller","../controllers/confirmation.controller","../controllers/login.controller","../controllers/new-chat.controller","../controllers/profile.controller","../controllers/settings.controller","../directives/input.directive","../filters/calendar.filter","../filters/chat-name.filter","../filters/chat-picture.filter","../services/new-chat.service","../routes",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/lib/app.js                                                                     //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.import('angular-animate');module.import('angular-meteor');module.import('angular-meteor-auth');module.import('angular-moment');module.import('angular-sanitize');module.import('angular-ui-router');module.import('ionic-scripts');var Angular;module.import('angular',{"default":function(v){Angular=v}});var Loader;module.import('angular-ecmascript/module-loader',{"default":function(v){Loader=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var ChatsCtrl;module.import('../controllers/chats.controller',{"default":function(v){ChatsCtrl=v}});var ChatCtrl;module.import('../controllers/chat.controller',{"default":function(v){ChatCtrl=v}});var ConfirmationCtrl;module.import('../controllers/confirmation.controller',{"default":function(v){ConfirmationCtrl=v}});var LoginCtrl;module.import('../controllers/login.controller',{"default":function(v){LoginCtrl=v}});var NewChatCtrl;module.import('../controllers/new-chat.controller',{"default":function(v){NewChatCtrl=v}});var ProfileCtrl;module.import('../controllers/profile.controller',{"default":function(v){ProfileCtrl=v}});var SettingsCtrl;module.import('../controllers/settings.controller',{"default":function(v){SettingsCtrl=v}});var InputDirective;module.import('../directives/input.directive',{"default":function(v){InputDirective=v}});var CalendarFilter;module.import('../filters/calendar.filter',{"default":function(v){CalendarFilter=v}});var ChatNameFilter;module.import('../filters/chat-name.filter',{"default":function(v){ChatNameFilter=v}});var ChatPictureFilter;module.import('../filters/chat-picture.filter',{"default":function(v){ChatPictureFilter=v}});var NewChatService;module.import('../services/new-chat.service',{"default":function(v){NewChatService=v}});var Routes;module.import('../routes',{"default":function(v){Routes=v}});// Libs
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 // 4
                                                                                                 // 5
                                                                                                 // 6
                                                                                                 // 7
                                                                                                 // 8
                                                                                                 // 9
                                                                                                 // 10
                                                                                                 // 11
                                                                                                 //
// Modules                                                                                       // 13
                                                                                                 // 14
                                                                                                 // 15
                                                                                                 // 16
                                                                                                 // 17
                                                                                                 // 18
                                                                                                 // 19
                                                                                                 // 20
                                                                                                 // 21
                                                                                                 // 22
                                                                                                 // 23
                                                                                                 // 24
                                                                                                 // 25
                                                                                                 // 26
                                                                                                 //
var App = 'Whatsapp';                                                                            // 28
                                                                                                 //
// App                                                                                           // 30
Angular.module(App, ['angular-meteor', 'angular-meteor.auth', 'angularMoment', 'ionic']);        // 31
                                                                                                 //
new Loader(App).load(ChatsCtrl).load(ChatCtrl).load(ConfirmationCtrl).load(LoginCtrl).load(NewChatCtrl).load(ProfileCtrl).load(SettingsCtrl).load(InputDirective).load(CalendarFilter).load(ChatNameFilter).load(ChatPictureFilter).load(NewChatService).load(Routes);
                                                                                                 //
// Startup                                                                                       // 53
if (Meteor.isCordova) {                                                                          // 54
  Angular.element(document).on('deviceready', onReady);                                          // 55
} else {                                                                                         // 56
  Angular.element(document).ready(onReady);                                                      // 58
}                                                                                                // 59
                                                                                                 //
function onReady() {                                                                             // 61
  Angular.bootstrap(document, [App]);                                                            // 62
}                                                                                                // 63
///////////////////////////////////////////////////////////////////////////////////////////////////

}]},"controllers":{"chat.controller.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","ionic-scripts","meteor/underscore","meteor/meteor","meteor/okland:camera-ui","angular-ecmascript/module-helpers","../../../lib/collections",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/controllers/chat.controller.js                                                 //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var Ionic;module.import('ionic-scripts',{"default":function(v){Ionic=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var MeteorCameraUI;module.import('meteor/okland:camera-ui',{"MeteorCameraUI":function(v){MeteorCameraUI=v}});var Controller;module.import('angular-ecmascript/module-helpers',{"Controller":function(v){Controller=v}});var Chats,Messages;module.import('../../../lib/collections',{"Chats":function(v){Chats=v},"Messages":function(v){Messages=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 // 4
                                                                                                 // 5
                                                                                                 // 6
                                                                                                 //
var ChatCtrl = function (_Controller) {                                                          //
  _inherits(ChatCtrl, _Controller);                                                              //
                                                                                                 //
  function ChatCtrl() {                                                                          // 9
    _classCallCheck(this, ChatCtrl);                                                             // 9
                                                                                                 //
    var _this = _possibleConstructorReturn(this, _Controller.apply(this, arguments));            // 9
                                                                                                 //
    _this.chatId = _this.$stateParams.chatId;                                                    // 12
    _this.isIOS = Ionic.Platform.isWebView() && Ionic.Platform.isIOS();                          // 13
    _this.isCordova = Meteor.isCordova;                                                          // 14
                                                                                                 //
    _this.helpers({                                                                              // 16
      messages: function () {                                                                    // 17
        function messages() {                                                                    // 16
          return Messages.find({ chatId: this.chatId });                                         // 18
        }                                                                                        // 19
                                                                                                 //
        return messages;                                                                         // 16
      }(),                                                                                       // 16
      data: function () {                                                                        // 20
        function data() {                                                                        // 16
          return Chats.findOne(this.chatId);                                                     // 21
        }                                                                                        // 22
                                                                                                 //
        return data;                                                                             // 16
      }()                                                                                        // 16
    });                                                                                          // 16
                                                                                                 //
    _this.autoScroll();                                                                          // 25
    return _this;                                                                                // 9
  }                                                                                              // 26
                                                                                                 //
  ChatCtrl.prototype.sendPicture = function () {                                                 //
    function sendPicture() {                                                                     //
      var _this2 = this;                                                                         // 28
                                                                                                 //
      MeteorCameraUI.getPicture({}, function (err, data) {                                       // 29
        if (err) return _this2.handleError(err);                                                 // 30
                                                                                                 //
        _this2.callMethod('newMessage', {                                                        // 32
          picture: data,                                                                         // 33
          type: 'picture',                                                                       // 34
          chatId: _this2.chatId                                                                  // 35
        });                                                                                      // 32
      });                                                                                        // 37
    }                                                                                            // 38
                                                                                                 //
    return sendPicture;                                                                          //
  }();                                                                                           //
                                                                                                 //
  ChatCtrl.prototype.sendMessage = function () {                                                 //
    function sendMessage() {                                                                     //
      if (_.isEmpty(this.message)) return;                                                       // 41
                                                                                                 //
      this.callMethod('newMessage', {                                                            // 43
        text: this.message,                                                                      // 44
        type: 'text',                                                                            // 45
        chatId: this.chatId                                                                      // 46
      });                                                                                        // 43
                                                                                                 //
      delete this.message;                                                                       // 49
    }                                                                                            // 50
                                                                                                 //
    return sendMessage;                                                                          //
  }();                                                                                           //
                                                                                                 //
  ChatCtrl.prototype.inputUp = function () {                                                     //
    function inputUp() {                                                                         //
      if (this.isIOS) {                                                                          // 53
        this.keyboardHeight = 216;                                                               // 54
      }                                                                                          // 55
                                                                                                 //
      this.scrollBottom(true);                                                                   // 57
    }                                                                                            // 58
                                                                                                 //
    return inputUp;                                                                              //
  }();                                                                                           //
                                                                                                 //
  ChatCtrl.prototype.inputDown = function () {                                                   //
    function inputDown() {                                                                       //
      if (this.isIOS) {                                                                          // 61
        this.keyboardHeight = 0;                                                                 // 62
      }                                                                                          // 63
                                                                                                 //
      this.$ionicScrollDelegate.$getByHandle('chatScroll').resize();                             // 65
    }                                                                                            // 66
                                                                                                 //
    return inputDown;                                                                            //
  }();                                                                                           //
                                                                                                 //
  ChatCtrl.prototype.closeKeyboard = function () {                                               //
    function closeKeyboard() {                                                                   //
      if (this.isCordova) {                                                                      // 69
        cordova.plugins.Keyboard.close();                                                        // 70
      }                                                                                          // 71
    }                                                                                            // 72
                                                                                                 //
    return closeKeyboard;                                                                        //
  }();                                                                                           //
                                                                                                 //
  ChatCtrl.prototype.autoScroll = function () {                                                  //
    function autoScroll() {                                                                      //
      var _this3 = this;                                                                         // 74
                                                                                                 //
      var recentMessagesNum = this.messages.length;                                              // 75
                                                                                                 //
      this.autorun(function () {                                                                 // 77
        var currMessagesNum = _this3.getCollectionReactively('messages').length;                 // 78
        var animate = recentMessagesNum != currMessagesNum;                                      // 79
        recentMessagesNum = currMessagesNum;                                                     // 80
        _this3.scrollBottom(animate);                                                            // 81
      });                                                                                        // 82
    }                                                                                            // 83
                                                                                                 //
    return autoScroll;                                                                           //
  }();                                                                                           //
                                                                                                 //
  ChatCtrl.prototype.scrollBottom = function () {                                                //
    function scrollBottom(animate) {                                                             //
      var _this4 = this;                                                                         // 85
                                                                                                 //
      this.$timeout(function () {                                                                // 86
        _this4.$ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(animate);            // 87
      }, 300);                                                                                   // 88
    }                                                                                            // 89
                                                                                                 //
    return scrollBottom;                                                                         //
  }();                                                                                           //
                                                                                                 //
  ChatCtrl.prototype.handleError = function () {                                                 //
    function handleError(err) {                                                                  //
      if (err.error == 'cancel') return;                                                         // 92
      this.$log.error('Profile save error ', err);                                               // 93
                                                                                                 //
      this.$ionicPopup.alert({                                                                   // 95
        title: err.reason || 'Save failed',                                                      // 96
        template: 'Please try again',                                                            // 97
        okType: 'button-positive button-clear'                                                   // 98
      });                                                                                        // 95
    }                                                                                            // 100
                                                                                                 //
    return handleError;                                                                          //
  }();                                                                                           //
                                                                                                 //
  return ChatCtrl;                                                                               //
}(Controller);                                                                                   //
                                                                                                 //
module.export("default",exports.default=(ChatCtrl));                                             //
                                                                                                 //
                                                                                                 //
ChatCtrl.$name = 'ChatCtrl';                                                                     // 103
ChatCtrl.$inject = ['$stateParams', '$timeout', '$ionicScrollDelegate', '$ionicPopup', '$log'];  // 104
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"chats.controller.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","angular-ecmascript/module-helpers","../../../lib/collections",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/controllers/chats.controller.js                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var Controller;module.import('angular-ecmascript/module-helpers',{"Controller":function(v){Controller=v}});var Chats;module.import('../../../lib/collections',{"Chats":function(v){Chats=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 //
var ChatsCtrl = function (_Controller) {                                                         //
  _inherits(ChatsCtrl, _Controller);                                                             //
                                                                                                 //
  function ChatsCtrl() {                                                                         // 5
    _classCallCheck(this, ChatsCtrl);                                                            // 5
                                                                                                 //
    var _this = _possibleConstructorReturn(this, _Controller.apply(this, arguments));            // 5
                                                                                                 //
    _this.helpers({                                                                              // 8
      data: function () {                                                                        // 9
        function data() {                                                                        // 8
          return Chats.find();                                                                   // 10
        }                                                                                        // 11
                                                                                                 //
        return data;                                                                             // 8
      }()                                                                                        // 8
    });                                                                                          // 8
    return _this;                                                                                // 5
  }                                                                                              // 13
                                                                                                 //
  ChatsCtrl.prototype.showNewChatModal = function () {                                           //
    function showNewChatModal() {                                                                //
      this.NewChat.showModal();                                                                  // 16
    }                                                                                            // 17
                                                                                                 //
    return showNewChatModal;                                                                     //
  }();                                                                                           //
                                                                                                 //
  ChatsCtrl.prototype.remove = function () {                                                     //
    function remove(chat) {                                                                      //
      this.callMethod('removeChat', chat._id);                                                   // 20
    }                                                                                            // 21
                                                                                                 //
    return remove;                                                                               //
  }();                                                                                           //
                                                                                                 //
  return ChatsCtrl;                                                                              //
}(Controller);                                                                                   //
                                                                                                 //
module.export("default",exports.default=(ChatsCtrl));                                            //
                                                                                                 //
                                                                                                 //
ChatsCtrl.$name = 'ChatsCtrl';                                                                   // 24
ChatsCtrl.$inject = ['NewChat'];                                                                 // 25
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"confirmation.controller.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/underscore","meteor/accounts-base","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/controllers/confirmation.controller.js                                         //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});var Controller;module.import('angular-ecmascript/module-helpers',{"Controller":function(v){Controller=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
var ConfirmationCtrl = function (_Controller) {                                                  //
  _inherits(ConfirmationCtrl, _Controller);                                                      //
                                                                                                 //
  function ConfirmationCtrl() {                                                                  // 6
    _classCallCheck(this, ConfirmationCtrl);                                                     // 6
                                                                                                 //
    var _this = _possibleConstructorReturn(this, _Controller.apply(this, arguments));            // 6
                                                                                                 //
    _this.phone = _this.$state.params.phone;                                                     // 9
    return _this;                                                                                // 6
  }                                                                                              // 10
                                                                                                 //
  ConfirmationCtrl.prototype.confirm = function () {                                             //
    function confirm() {                                                                         //
      var _this2 = this;                                                                         // 12
                                                                                                 //
      if (_.isEmpty(this.code)) return;                                                          // 13
                                                                                                 //
      Accounts.verifyPhone(this.phone, this.code, function (err) {                               // 15
        if (err) return _this2.handleError(err);                                                 // 16
        _this2.$state.go('profile');                                                             // 17
      });                                                                                        // 18
    }                                                                                            // 19
                                                                                                 //
    return confirm;                                                                              //
  }();                                                                                           //
                                                                                                 //
  ConfirmationCtrl.prototype.handleError = function () {                                         //
    function handleError(err) {                                                                  //
      this.$log.error('Confirmation error ', err);                                               // 22
                                                                                                 //
      this.$ionicPopup.alert({                                                                   // 24
        title: err.reason || 'Confirmation failed',                                              // 25
        template: 'Please try again',                                                            // 26
        okType: 'button-positive button-clear'                                                   // 27
      });                                                                                        // 24
    }                                                                                            // 29
                                                                                                 //
    return handleError;                                                                          //
  }();                                                                                           //
                                                                                                 //
  return ConfirmationCtrl;                                                                       //
}(Controller);                                                                                   //
                                                                                                 //
module.export("default",exports.default=(ConfirmationCtrl));                                     //
                                                                                                 //
                                                                                                 //
ConfirmationCtrl.$name = 'ConfirmationCtrl';                                                     // 32
ConfirmationCtrl.$inject = ['$state', '$ionicPopup', '$log'];                                    // 33
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"login.controller.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/underscore","meteor/accounts-base","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/controllers/login.controller.js                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});var Controller;module.import('angular-ecmascript/module-helpers',{"Controller":function(v){Controller=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
var LoginCtrl = function (_Controller) {                                                         //
  _inherits(LoginCtrl, _Controller);                                                             //
                                                                                                 //
  function LoginCtrl() {                                                                         //
    _classCallCheck(this, LoginCtrl);                                                            //
                                                                                                 //
    return _possibleConstructorReturn(this, _Controller.apply(this, arguments));                 //
  }                                                                                              //
                                                                                                 //
  LoginCtrl.prototype.login = function () {                                                      //
    function login() {                                                                           //
      var _this2 = this;                                                                         // 6
                                                                                                 //
      if (_.isEmpty(this.phone)) return;                                                         // 7
                                                                                                 //
      var confirmPopup = this.$ionicPopup.confirm({                                              // 9
        title: 'Number confirmation',                                                            // 10
        template: '<div>' + this.phone + '</div><div>Is your phone number above correct?</div>',
        cssClass: 'text-center',                                                                 // 12
        okText: 'Yes',                                                                           // 13
        okType: 'button-positive button-clear',                                                  // 14
        cancelText: 'edit',                                                                      // 15
        cancelType: 'button-dark button-clear'                                                   // 16
      });                                                                                        // 9
                                                                                                 //
      confirmPopup.then(function (res) {                                                         // 19
        if (!res) return;                                                                        // 20
                                                                                                 //
        _this2.$ionicLoading.show({                                                              // 22
          template: 'Sending verification code...'                                               // 23
        });                                                                                      // 22
                                                                                                 //
        Accounts.requestPhoneVerification(_this2.phone, function (err) {                         // 26
          _this2.$ionicLoading.hide();                                                           // 27
          if (err) return _this2.handleError(err);                                               // 28
          _this2.$state.go('confirmation', { phone: _this2.phone });                             // 29
        });                                                                                      // 30
      });                                                                                        // 31
    }                                                                                            // 32
                                                                                                 //
    return login;                                                                                //
  }();                                                                                           //
                                                                                                 //
  LoginCtrl.prototype.handleError = function () {                                                //
    function handleError(err) {                                                                  //
      this.$log.error('Login error ', err);                                                      // 35
                                                                                                 //
      this.$ionicPopup.alert({                                                                   // 37
        title: err.reason || 'Login failed',                                                     // 38
        template: 'Please try again',                                                            // 39
        okType: 'button-positive button-clear'                                                   // 40
      });                                                                                        // 37
    }                                                                                            // 42
                                                                                                 //
    return handleError;                                                                          //
  }();                                                                                           //
                                                                                                 //
  return LoginCtrl;                                                                              //
}(Controller);                                                                                   //
                                                                                                 //
module.export("default",exports.default=(LoginCtrl));                                            //
                                                                                                 //
                                                                                                 //
LoginCtrl.$name = 'LoginCtrl';                                                                   // 45
LoginCtrl.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$log'];                          // 46
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"new-chat.controller.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/meteor","angular-ecmascript/module-helpers","../../../lib/collections",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/controllers/new-chat.controller.js                                             //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Controller;module.import('angular-ecmascript/module-helpers',{"Controller":function(v){Controller=v}});var Chats;module.import('../../../lib/collections',{"Chats":function(v){Chats=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
var NewChatCtrl = function (_Controller) {                                                       //
  _inherits(NewChatCtrl, _Controller);                                                           //
                                                                                                 //
  function NewChatCtrl() {                                                                       // 6
    _classCallCheck(this, NewChatCtrl);                                                          // 6
                                                                                                 //
    var _this = _possibleConstructorReturn(this, _Controller.apply(this, arguments));            // 6
                                                                                                 //
    _this.subscribe('users');                                                                    // 9
                                                                                                 //
    _this.helpers({                                                                              // 11
      users: function () {                                                                       // 12
        function users() {                                                                       // 11
          return Meteor.users.find({ _id: { $ne: this.currentUserId } });                        // 13
        }                                                                                        // 14
                                                                                                 //
        return users;                                                                            // 11
      }()                                                                                        // 11
    });                                                                                          // 11
    return _this;                                                                                // 6
  }                                                                                              // 16
                                                                                                 //
  NewChatCtrl.prototype.newChat = function () {                                                  //
    function newChat(userId) {                                                                   //
      var _this2 = this;                                                                         // 18
                                                                                                 //
      var chat = Chats.findOne({ userIds: { $all: [this.currentUserId, userId] } });             // 19
                                                                                                 //
      if (chat) {                                                                                // 21
        this.hideNewChatModal();                                                                 // 22
        return this.goToChat(chat._id);                                                          // 23
      }                                                                                          // 24
                                                                                                 //
      this.callMethod('newChat', userId, function (err, chatId) {                                // 26
        _this2.hideNewChatModal();                                                               // 27
        if (err) return _this2.handleError(err);                                                 // 28
        _this2.goToChat(chatId);                                                                 // 29
      });                                                                                        // 30
    }                                                                                            // 31
                                                                                                 //
    return newChat;                                                                              //
  }();                                                                                           //
                                                                                                 //
  NewChatCtrl.prototype.hideNewChatModal = function () {                                         //
    function hideNewChatModal() {                                                                //
      this.NewChat.hideModal();                                                                  // 34
    }                                                                                            // 35
                                                                                                 //
    return hideNewChatModal;                                                                     //
  }();                                                                                           //
                                                                                                 //
  NewChatCtrl.prototype.goToChat = function () {                                                 //
    function goToChat(chatId) {                                                                  //
      this.$state.go('tab.chat', { chatId: chatId });                                            // 38
    }                                                                                            // 39
                                                                                                 //
    return goToChat;                                                                             //
  }();                                                                                           //
                                                                                                 //
  NewChatCtrl.prototype.handleError = function () {                                              //
    function handleError(err) {                                                                  //
      this.$log.error('New chat creation error ', err);                                          // 42
                                                                                                 //
      this.$ionicPopup.alert({                                                                   // 44
        title: err.reason || 'New chat creation failed',                                         // 45
        template: 'Please try again',                                                            // 46
        okType: 'button-positive button-clear'                                                   // 47
      });                                                                                        // 44
    }                                                                                            // 49
                                                                                                 //
    return handleError;                                                                          //
  }();                                                                                           //
                                                                                                 //
  return NewChatCtrl;                                                                            //
}(Controller);                                                                                   //
                                                                                                 //
module.export("default",exports.default=(NewChatCtrl));                                          //
                                                                                                 //
                                                                                                 //
NewChatCtrl.$name = 'NewChatCtrl';                                                               // 52
NewChatCtrl.$inject = ['$state', 'NewChat', '$ionicPopup', '$log'];                              // 53
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"profile.controller.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/underscore","meteor/okland:camera-ui","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/controllers/profile.controller.js                                              //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});var MeteorCameraUI;module.import('meteor/okland:camera-ui',{"MeteorCameraUI":function(v){MeteorCameraUI=v}});var Controller;module.import('angular-ecmascript/module-helpers',{"Controller":function(v){Controller=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
var ProfileCtrl = function (_Controller) {                                                       //
  _inherits(ProfileCtrl, _Controller);                                                           //
                                                                                                 //
  function ProfileCtrl() {                                                                       // 6
    _classCallCheck(this, ProfileCtrl);                                                          // 6
                                                                                                 //
    var _this = _possibleConstructorReturn(this, _Controller.apply(this, arguments));            // 6
                                                                                                 //
    var profile = _this.currentUser && _this.currentUser.profile;                                // 9
    _this.name = profile ? profile.name : '';                                                    // 10
    return _this;                                                                                // 6
  }                                                                                              // 11
                                                                                                 //
  ProfileCtrl.prototype.updatePicture = function () {                                            //
    function updatePicture() {                                                                   //
      var _this2 = this;                                                                         // 13
                                                                                                 //
      MeteorCameraUI.getPicture({ width: 60, height: 60 }, function (err, data) {                // 14
        if (err) return _this2.handleError(err);                                                 // 15
                                                                                                 //
        _this2.$ionicLoading.show({                                                              // 17
          template: 'Updating picture...'                                                        // 18
        });                                                                                      // 17
                                                                                                 //
        _this2.callMethod('updatePicture', data, function (err) {                                // 21
          _this2.$ionicLoading.hide();                                                           // 22
          _this2.handleError(err);                                                               // 23
        });                                                                                      // 24
      });                                                                                        // 25
    }                                                                                            // 26
                                                                                                 //
    return updatePicture;                                                                        //
  }();                                                                                           //
                                                                                                 //
  ProfileCtrl.prototype.updateName = function () {                                               //
    function updateName() {                                                                      //
      var _this3 = this;                                                                         // 28
                                                                                                 //
      if (_.isEmpty(this.name)) return;                                                          // 29
                                                                                                 //
      this.callMethod('updateName', this.name, function (err) {                                  // 31
        if (err) return _this3.handleError(err);                                                 // 32
        _this3.$state.go('tab.chats');                                                           // 33
      });                                                                                        // 34
    }                                                                                            // 35
                                                                                                 //
    return updateName;                                                                           //
  }();                                                                                           //
                                                                                                 //
  ProfileCtrl.prototype.handleError = function () {                                              //
    function handleError(err) {                                                                  //
      if (err.error == 'cancel') return;                                                         // 38
      this.$log.error('Profile save error ', err);                                               // 39
                                                                                                 //
      this.$ionicPopup.alert({                                                                   // 41
        title: err.reason || 'Save failed',                                                      // 42
        template: 'Please try again',                                                            // 43
        okType: 'button-positive button-clear'                                                   // 44
      });                                                                                        // 41
    }                                                                                            // 46
                                                                                                 //
    return handleError;                                                                          //
  }();                                                                                           //
                                                                                                 //
  return ProfileCtrl;                                                                            //
}(Controller);                                                                                   //
                                                                                                 //
module.export("default",exports.default=(ProfileCtrl));                                          //
                                                                                                 //
                                                                                                 //
ProfileCtrl.$name = 'ProfileCtrl';                                                               // 49
ProfileCtrl.$inject = ['$state', '$ionicLoading', '$ionicPopup', '$log'];                        // 50
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"settings.controller.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/meteor","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/controllers/settings.controller.js                                             //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Controller;module.import('angular-ecmascript/module-helpers',{"Controller":function(v){Controller=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 //
var SettingsCtrl = function (_Controller) {                                                      //
  _inherits(SettingsCtrl, _Controller);                                                          //
                                                                                                 //
  function SettingsCtrl() {                                                                      //
    _classCallCheck(this, SettingsCtrl);                                                         //
                                                                                                 //
    return _possibleConstructorReturn(this, _Controller.apply(this, arguments));                 //
  }                                                                                              //
                                                                                                 //
  SettingsCtrl.prototype.logout = function () {                                                  //
    function logout() {                                                                          //
      var _this2 = this;                                                                         // 5
                                                                                                 //
      Meteor.logout(function (err) {                                                             // 6
        if (err) return _this2.handleError(err);                                                 // 7
        _this2.$state.go('login');                                                               // 8
      });                                                                                        // 9
    }                                                                                            // 10
                                                                                                 //
    return logout;                                                                               //
  }();                                                                                           //
                                                                                                 //
  SettingsCtrl.prototype.handleError = function () {                                             //
    function handleError(err) {                                                                  //
      this.$log.error('Settings modification error', err);                                       // 13
                                                                                                 //
      this.$ionicPopup.alert({                                                                   // 15
        title: err.reason || 'Settings modification failed',                                     // 16
        template: 'Please try again',                                                            // 17
        okType: 'button-positive button-clear'                                                   // 18
      });                                                                                        // 15
    }                                                                                            // 20
                                                                                                 //
    return handleError;                                                                          //
  }();                                                                                           //
                                                                                                 //
  return SettingsCtrl;                                                                           //
}(Controller);                                                                                   //
                                                                                                 //
module.export("default",exports.default=(SettingsCtrl));                                         //
                                                                                                 //
                                                                                                 //
SettingsCtrl.$inject = ['$state', '$ionicPopup', '$log'];                                        // 23
///////////////////////////////////////////////////////////////////////////////////////////////////

}]},"directives":{"input.directive.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/directives/input.directive.js                                                  //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var Directive;module.import('angular-ecmascript/module-helpers',{"Directive":function(v){Directive=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 //
var InputDirective = function (_Directive) {                                                     //
  _inherits(InputDirective, _Directive);                                                         //
                                                                                                 //
  function InputDirective() {                                                                    // 4
    _classCallCheck(this, InputDirective);                                                       // 4
                                                                                                 //
    var _this = _possibleConstructorReturn(this, _Directive.apply(this, arguments));             // 4
                                                                                                 //
    _this.restrict = 'E';                                                                        // 7
                                                                                                 //
    _this.scope = {                                                                              // 9
      'returnClose': '=',                                                                        // 10
      'onReturn': '&',                                                                           // 11
      'onFocus': '&',                                                                            // 12
      'onBlur': '&'                                                                              // 13
    };                                                                                           // 9
    return _this;                                                                                // 4
  }                                                                                              // 15
                                                                                                 //
  InputDirective.prototype.link = function () {                                                  //
    function link(scope, element) {                                                              //
      var _this2 = this;                                                                         // 17
                                                                                                 //
      element.bind('focus', function (e) {                                                       // 18
        if (!scope.onFocus) return;                                                              // 19
                                                                                                 //
        _this2.$timeout(function () {                                                            // 21
          scope.onFocus();                                                                       // 22
        });                                                                                      // 23
      });                                                                                        // 24
                                                                                                 //
      element.bind('blur', function (e) {                                                        // 26
        if (!scope.onBlur) return;                                                               // 27
                                                                                                 //
        _this2.$timeout(function () {                                                            // 29
          scope.onBlur();                                                                        // 30
        });                                                                                      // 31
      });                                                                                        // 32
                                                                                                 //
      element.bind('keydown', function (e) {                                                     // 34
        if (e.which != 13) return;                                                               // 35
                                                                                                 //
        if (scope.returnClose) {                                                                 // 37
          element[0].blur();                                                                     // 38
        }                                                                                        // 39
                                                                                                 //
        if (scope.onReturn) {                                                                    // 41
          _this2.$timeout(function () {                                                          // 42
            scope.onReturn();                                                                    // 43
          });                                                                                    // 44
        }                                                                                        // 45
      });                                                                                        // 46
    }                                                                                            // 47
                                                                                                 //
    return link;                                                                                 //
  }();                                                                                           //
                                                                                                 //
  return InputDirective;                                                                         //
}(Directive);                                                                                    //
                                                                                                 //
module.export("default",exports.default=(InputDirective));                                       //
                                                                                                 //
                                                                                                 //
InputDirective.$name = 'input';                                                                  // 50
InputDirective.$inject = ['$timeout'];                                                           // 51
///////////////////////////////////////////////////////////////////////////////////////////////////

}]},"filters":{"calendar.filter.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","moment","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/filters/calendar.filter.js                                                     //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var Moment;module.import('moment',{"default":function(v){Moment=v}});var Filter;module.import('angular-ecmascript/module-helpers',{"Filter":function(v){Filter=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 //
var CalendarFilter = function (_Filter) {                                                        //
  _inherits(CalendarFilter, _Filter);                                                            //
                                                                                                 //
  function CalendarFilter() {                                                                    //
    _classCallCheck(this, CalendarFilter);                                                       //
                                                                                                 //
    return _possibleConstructorReturn(this, _Filter.apply(this, arguments));                     //
  }                                                                                              //
                                                                                                 //
  CalendarFilter.prototype.filter = function () {                                                //
    function filter(time) {                                                                      //
      if (!time) return;                                                                         // 6
                                                                                                 //
      return Moment(time).calendar(null, {                                                       // 8
        lastDay: '[Yesterday]',                                                                  // 9
        sameDay: 'LT',                                                                           // 10
        lastWeek: 'dddd',                                                                        // 11
        sameElse: 'DD/MM/YY'                                                                     // 12
      });                                                                                        // 8
    }                                                                                            // 14
                                                                                                 //
    return filter;                                                                               //
  }();                                                                                           //
                                                                                                 //
  return CalendarFilter;                                                                         //
}(Filter);                                                                                       //
                                                                                                 //
module.export("default",exports.default=(CalendarFilter));                                       //
                                                                                                 //
                                                                                                 //
CalendarFilter.$name = 'calendar';                                                               // 17
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"chat-name.filter.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/underscore","meteor/meteor","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/filters/chat-name.filter.js                                                    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Filter;module.import('angular-ecmascript/module-helpers',{"Filter":function(v){Filter=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
var ChatNameFilter = function (_Filter) {                                                        //
  _inherits(ChatNameFilter, _Filter);                                                            //
                                                                                                 //
  function ChatNameFilter() {                                                                    //
    _classCallCheck(this, ChatNameFilter);                                                       //
                                                                                                 //
    return _possibleConstructorReturn(this, _Filter.apply(this, arguments));                     //
  }                                                                                              //
                                                                                                 //
  ChatNameFilter.prototype.filter = function () {                                                //
    function filter(chat) {                                                                      //
      if (!chat) return;                                                                         // 7
                                                                                                 //
      var otherId = _.without(chat.userIds, Meteor.userId())[0];                                 // 9
      var otherUser = Meteor.users.findOne(otherId);                                             // 10
      var hasName = otherUser && otherUser.profile && otherUser.profile.name;                    // 11
                                                                                                 //
      return hasName ? otherUser.profile.name : chat.name || 'NO NAME';                          // 13
    }                                                                                            // 14
                                                                                                 //
    return filter;                                                                               //
  }();                                                                                           //
                                                                                                 //
  return ChatNameFilter;                                                                         //
}(Filter);                                                                                       //
                                                                                                 //
module.export("default",exports.default=(ChatNameFilter));                                       //
                                                                                                 //
                                                                                                 //
ChatNameFilter.$name = 'chatName';                                                               // 17
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"chat-picture.filter.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/underscore","meteor/meteor","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/filters/chat-picture.filter.js                                                 //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Filter;module.import('angular-ecmascript/module-helpers',{"Filter":function(v){Filter=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
var ChatPictureFilter = function (_Filter) {                                                     //
  _inherits(ChatPictureFilter, _Filter);                                                         //
                                                                                                 //
  function ChatPictureFilter() {                                                                 //
    _classCallCheck(this, ChatPictureFilter);                                                    //
                                                                                                 //
    return _possibleConstructorReturn(this, _Filter.apply(this, arguments));                     //
  }                                                                                              //
                                                                                                 //
  ChatPictureFilter.prototype.filter = function () {                                             //
    function filter(chat) {                                                                      //
      if (!chat) return;                                                                         // 7
                                                                                                 //
      var otherId = _.without(chat.userIds, Meteor.userId())[0];                                 // 9
      var otherUser = Meteor.users.findOne(otherId);                                             // 10
      var hasPicture = otherUser && otherUser.profile && otherUser.profile.picture;              // 11
                                                                                                 //
      return hasPicture ? otherUser.profile.picture : chat.picture || '/user-default.svg';       // 13
    }                                                                                            // 14
                                                                                                 //
    return filter;                                                                               //
  }();                                                                                           //
                                                                                                 //
  return ChatPictureFilter;                                                                      //
}(Filter);                                                                                       //
                                                                                                 //
module.export("default",exports.default=(ChatPictureFilter));                                    //
                                                                                                 //
                                                                                                 //
ChatPictureFilter.$name = 'chatPicture';                                                         // 17
///////////////////////////////////////////////////////////////////////////////////////////////////

}]},"services":{"new-chat.service.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/services/new-chat.service.js                                                   //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var Service;module.import('angular-ecmascript/module-helpers',{"Service":function(v){Service=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 //
var NewChatService = function (_Service) {                                                       //
  _inherits(NewChatService, _Service);                                                           //
                                                                                                 //
  function NewChatService() {                                                                    // 4
    _classCallCheck(this, NewChatService);                                                       // 4
                                                                                                 //
    var _this = _possibleConstructorReturn(this, _Service.apply(this, arguments));               // 4
                                                                                                 //
    _this.templateUrl = 'client/templates/new-chat.html';                                        // 7
    return _this;                                                                                // 4
  }                                                                                              // 8
                                                                                                 //
  NewChatService.prototype.showModal = function () {                                             //
    function showModal() {                                                                       //
      var _this2 = this;                                                                         // 10
                                                                                                 //
      this.scope = this.$rootScope.$new();                                                       // 11
                                                                                                 //
      this.$ionicModal.fromTemplateUrl(this.templateUrl, {                                       // 13
        scope: this.scope                                                                        // 14
      }).then(function (modal) {                                                                 // 13
        _this2.modal = modal;                                                                    // 17
        _this2.modal.show();                                                                     // 18
      });                                                                                        // 19
    }                                                                                            // 20
                                                                                                 //
    return showModal;                                                                            //
  }();                                                                                           //
                                                                                                 //
  NewChatService.prototype.hideModal = function () {                                             //
    function hideModal() {                                                                       //
      this.scope.$destroy();                                                                     // 23
      this.modal.remove();                                                                       // 24
    }                                                                                            // 25
                                                                                                 //
    return hideModal;                                                                            //
  }();                                                                                           //
                                                                                                 //
  return NewChatService;                                                                         //
}(Service);                                                                                      //
                                                                                                 //
module.export("default",exports.default=(NewChatService));                                       //
                                                                                                 //
                                                                                                 //
NewChatService.$name = 'NewChat';                                                                // 28
NewChatService.$inject = ['$rootScope', '$ionicModal'];                                          // 29
///////////////////////////////////////////////////////////////////////////////////////////////////

}]},"routes.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/underscore","meteor/meteor","angular-ecmascript/module-helpers",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/scripts/routes.js                                                                      //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Config,Runner;module.import('angular-ecmascript/module-helpers',{"Config":function(v){Config=v},"Runner":function(v){Runner=v}});
                                                                                                 //
                                                                                                 //
                                                                                                 // 1
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
var RoutesConfig = function (_Config) {                                                          //
  _inherits(RoutesConfig, _Config);                                                              //
                                                                                                 //
  function RoutesConfig() {                                                                      // 6
    _classCallCheck(this, RoutesConfig);                                                         // 6
                                                                                                 //
    var _this = _possibleConstructorReturn(this, _Config.apply(this, arguments));                // 6
                                                                                                 //
    _this.isAuthorized = ['$auth', _this.isAuthorized.bind(_this)];                              // 9
    return _this;                                                                                // 6
  }                                                                                              // 10
                                                                                                 //
  RoutesConfig.prototype.configure = function () {                                               //
    function configure() {                                                                       //
      this.$stateProvider.state('tab', {                                                         // 13
        url: '/tab',                                                                             // 15
        abstract: true,                                                                          // 16
        templateUrl: 'client/templates/tabs.html',                                               // 17
        resolve: {                                                                               // 18
          user: this.isAuthorized,                                                               // 19
          chats: function () {                                                                   // 20
            function chats() {                                                                   // 18
              return Meteor.subscribe('chats');                                                  // 21
            }                                                                                    // 22
                                                                                                 //
            return chats;                                                                        // 18
          }()                                                                                    // 18
        }                                                                                        // 18
      }).state('tab.chats', {                                                                    // 14
        url: '/chats',                                                                           // 26
        views: {                                                                                 // 27
          'tab-chats': {                                                                         // 28
            templateUrl: 'client/templates/chats.html',                                          // 29
            controller: 'ChatsCtrl as chats'                                                     // 30
          }                                                                                      // 28
        }                                                                                        // 27
      }).state('tab.chat', {                                                                     // 25
        url: '/chats/:chatId',                                                                   // 35
        views: {                                                                                 // 36
          'tab-chats': {                                                                         // 37
            templateUrl: 'client/templates/chat.html',                                           // 38
            controller: 'ChatCtrl as chat'                                                       // 39
          }                                                                                      // 37
        }                                                                                        // 36
      }).state('login', {                                                                        // 34
        url: '/login',                                                                           // 44
        templateUrl: 'client/templates/login.html',                                              // 45
        controller: 'LoginCtrl as logger'                                                        // 46
      }).state('confirmation', {                                                                 // 43
        url: '/confirmation/:phone',                                                             // 49
        templateUrl: 'client/templates/confirmation.html',                                       // 50
        controller: 'ConfirmationCtrl as confirmation'                                           // 51
      }).state('profile', {                                                                      // 48
        url: '/profile',                                                                         // 54
        templateUrl: 'client/templates/profile.html',                                            // 55
        controller: 'ProfileCtrl as profile',                                                    // 56
        resolve: {                                                                               // 57
          user: this.isAuthorized                                                                // 58
        }                                                                                        // 57
      }).state('tab.settings', {                                                                 // 53
        url: '/settings',                                                                        // 62
        views: {                                                                                 // 63
          'tab-settings': {                                                                      // 64
            templateUrl: 'client/templates/settings.html',                                       // 65
            controller: 'SettingsCtrl as settings'                                               // 66
          }                                                                                      // 64
        }                                                                                        // 63
      });                                                                                        // 61
                                                                                                 //
      this.$urlRouterProvider.otherwise('tab/chats');                                            // 71
    }                                                                                            // 72
                                                                                                 //
    return configure;                                                                            //
  }();                                                                                           //
                                                                                                 //
  RoutesConfig.prototype.isAuthorized = function () {                                            //
    function isAuthorized($auth) {                                                               //
      return $auth.awaitUser();                                                                  // 75
    }                                                                                            // 76
                                                                                                 //
    return isAuthorized;                                                                         //
  }();                                                                                           //
                                                                                                 //
  return RoutesConfig;                                                                           //
}(Config);                                                                                       //
                                                                                                 //
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];                                 // 79
                                                                                                 //
var RoutesRunner = function (_Runner) {                                                          //
  _inherits(RoutesRunner, _Runner);                                                              //
                                                                                                 //
  function RoutesRunner() {                                                                      //
    _classCallCheck(this, RoutesRunner);                                                         //
                                                                                                 //
    return _possibleConstructorReturn(this, _Runner.apply(this, arguments));                     //
  }                                                                                              //
                                                                                                 //
  RoutesRunner.prototype.run = function () {                                                     //
    function run() {                                                                             //
      var _this3 = this;                                                                         // 82
                                                                                                 //
      this.$rootScope.$on('$stateChangeError', function () {                                     // 83
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {   // 83
          args[_key] = arguments[_key];                                                          // 83
        }                                                                                        // 83
                                                                                                 //
        var err = _.last(args);                                                                  // 84
                                                                                                 //
        if (err === 'AUTH_REQUIRED') {                                                           // 86
          _this3.$state.go('login');                                                             // 87
        }                                                                                        // 88
      });                                                                                        // 89
    }                                                                                            // 90
                                                                                                 //
    return run;                                                                                  //
  }();                                                                                           //
                                                                                                 //
  return RoutesRunner;                                                                           //
}(Runner);                                                                                       //
                                                                                                 //
RoutesRunner.$inject = ['$rootScope', '$state'];                                                 // 93
                                                                                                 //
module.export("default",exports.default=([RoutesConfig, RoutesRunner]));                         // 95
///////////////////////////////////////////////////////////////////////////////////////////////////

}]},"templates":{"chat.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/templates/chat.html                                                                    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
      if (Meteor.isServer) return;                                                               // 2
                                                                                                 // 3
      var templateUrl = "/client/templates/chat.html";                                           // 4
      var template = "<ion-view title=\"{{ chat.data | chatName }}\"> <ion-nav-buttons side=\"right\"> <button class=\"button button-clear\"><img class=\"header-picture\" ng-src=\"{{ chat.data | chatPicture }}\"></button> </ion-nav-buttons> <ion-content class=\"chat\" delegate-handle=\"chatScroll\"> <div class=\"message-list\"> <div ng-repeat=\"message in chat.messages\" class=\"message-wrapper\"> <div class=\"message\" ng-class=\"message.userId === $root.currentUser._id ? 'message-mine' : 'message-other'\"> <ng-switch on=\"message.type\"> <div ng-switch-when=\"text\" class=\"text\">{{ message.text }}</div> <div ng-switch-when=\"picture\" class=\"picture\"> <img ng-src=\"{{ message.picture }}\"> </div> </ng-switch> <span class=\"message-timestamp\">{{ message.timestamp | amDateFormat: 'HH:MM' }}</span> </div> </div> </div> </ion-content> <ion-footer-bar keyboard-attach class=\"bar-stable footer-chat item-input-inset\"> <button class=\"button button-clear button-icon button-positive icon ion-ios-upload-outline\"></button> <label class=\"item-input-wrapper\"> <input ng-model=\"chat.message\" dir=\"auto\" type=\"text\" on-return=\"chat.sendMessage(); chat.closeKeyboard()\" on-focus=\"chat.inputUp()\" on-blur=\"chat.inputDown()\"> </label> <span ng-if=\"chat.message.length > 0\"> <button ng-click=\"chat.sendMessage()\" class=\"button button-clear button-positive\">Send</button> </span> <span ng-if=\"!chat.message || chat.message.length === 0\"> <button ng-click=\"chat.sendPicture()\" class=\"button button-clear button-icon button-positive icon ion-ios-camera-outline\"></button> <i class=\"buttons-seperator icon ion-android-more-vertical\"></i> <button class=\"button button-clear button-icon button-positive icon ion-ios-mic-outline\"></button> </span> </ion-footer-bar> </ion-view>";
                                                                                                 // 6
      angular.module('angular-templates')                                                        // 7
        .run(['$templateCache', function($templateCache) {                                       // 8
          $templateCache.put(templateUrl, template);                                             // 9
        }]);                                                                                     // 10
                                                                                                 // 11
      module.exports = {};                                                                       // 12
      module.exports.__esModule = true;                                                          // 13
      module.exports.default = templateUrl;                                                      // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

},"chats.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/templates/chats.html                                                                   //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
      if (Meteor.isServer) return;                                                               // 2
                                                                                                 // 3
      var templateUrl = "/client/templates/chats.html";                                          // 4
      var template = "<ion-view view-title=\"Chats\"> <ion-nav-buttons side=\"right\"> <button ng-click=\"chats.showNewChatModal()\" class=\"button button-clear button-positive button-icon ion-ios-compose-outline\"></button> </ion-nav-buttons> <ion-content> <ion-list> <ion-item ng-repeat=\"chat in chats.data | orderBy:'-lastMessage.timestamp'\" class=\"item-chat item-remove-animate item-avatar item-icon-right\" type=\"item-text-wrap\" href=\"#/tab/chats/{{ chat._id }}\"> <img ng-src=\"{{ chat | chatPicture }}\"> <h2>{{ chat | chatName }}</h2> <ng-switch on=\"chat.lastMessage.type\"> <p ng-switch-when=\"text\">{{ chat.lastMessage.text }}</p> <p ng-switch-when=\"picture\">image</p> </ng-switch> <span class=\"last-message-timestamp\">{{ chat.lastMessage.timestamp | calendar }}</span> <i class=\"icon ion-chevron-right icon-accessory\"></i> <ion-option-button class=\"button-assertive\" ng-click=\"chats.remove(chat)\"> Delete </ion-option-button> </ion-item> </ion-list> </ion-content> </ion-view>";
                                                                                                 // 6
      angular.module('angular-templates')                                                        // 7
        .run(['$templateCache', function($templateCache) {                                       // 8
          $templateCache.put(templateUrl, template);                                             // 9
        }]);                                                                                     // 10
                                                                                                 // 11
      module.exports = {};                                                                       // 12
      module.exports.__esModule = true;                                                          // 13
      module.exports.default = templateUrl;                                                      // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

},"confirmation.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/templates/confirmation.html                                                            //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
      if (Meteor.isServer) return;                                                               // 2
                                                                                                 // 3
      var templateUrl = "/client/templates/confirmation.html";                                   // 4
      var template = "<ion-view title=\"{{ confirmation.phone }}\"> <ion-nav-buttons side=\"right\"> <button ng-click=\"confirmation.confirm()\" ng-disabled=\"!confirmation.code || confirmation.code.length === 0\" class=\"button button-clear button-positive\">Done</button> </ion-nav-buttons> <ion-content> <div class=\"text-center padding\"> We have sent you an SMS with a code to the number above </div> <div class=\"text-center padding\"> To complete your phone number verification WhatsApp, please enter the 4-digit activation code. </div> <div class=\"list padding-top\"> <label class=\"item item-input\"> <input ng-model=\"confirmation.code\" on-return=\"confirmation.confirm()\" type=\"text\" placeholder=\"Code\"> </label> </div> </ion-content> </ion-view>";
                                                                                                 // 6
      angular.module('angular-templates')                                                        // 7
        .run(['$templateCache', function($templateCache) {                                       // 8
          $templateCache.put(templateUrl, template);                                             // 9
        }]);                                                                                     // 10
                                                                                                 // 11
      module.exports = {};                                                                       // 12
      module.exports.__esModule = true;                                                          // 13
      module.exports.default = templateUrl;                                                      // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

},"login.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/templates/login.html                                                                   //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
      if (Meteor.isServer) return;                                                               // 2
                                                                                                 // 3
      var templateUrl = "/client/templates/login.html";                                          // 4
      var template = "<ion-view title=\"Your phone number\"> <ion-nav-buttons side=\"right\"> <button ng-click=\"logger.login()\" ng-disabled=\"!logger.phone || logger.phone.length === 0\" class=\"button button-clear button-positive\">Done</button> </ion-nav-buttons> <ion-content class=\"login\"> <div class=\"text-center instructions\"> Please confirm your country code and enter your phone number </div> <div class=\"list\"> <label class=\"item item-input\"> <input ng-model=\"logger.phone\" on-return=\"logger.login()\" type=\"text\" placeholder=\"Your phone number\"> </label> </div> </ion-content> </ion-view>";
                                                                                                 // 6
      angular.module('angular-templates')                                                        // 7
        .run(['$templateCache', function($templateCache) {                                       // 8
          $templateCache.put(templateUrl, template);                                             // 9
        }]);                                                                                     // 10
                                                                                                 // 11
      module.exports = {};                                                                       // 12
      module.exports.__esModule = true;                                                          // 13
      module.exports.default = templateUrl;                                                      // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

},"new-chat.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/templates/new-chat.html                                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
      if (Meteor.isServer) return;                                                               // 2
                                                                                                 // 3
      var templateUrl = "/client/templates/new-chat.html";                                       // 4
      var template = "<ion-modal-view ng-controller=\"NewChatCtrl as chat\"> <ion-header-bar> <h1 class=\"title\">New Chat</h1> <div class=\"buttons\"> <button class=\"button button-clear button-positive\" ng-click=\"chat.hideNewChatModal()\">Cancel</button> </div> </ion-header-bar> <ion-content> <div class=\"list\"> <a ng-repeat=\"user in chat.users\" ng-click=\"chat.newChat(user._id)\" class=\"item\"> <h2>{{ user.profile.name }}</h2> <p> Hey there! I am using meteor-Whatsapp with meteor. </p> </a> </div> </ion-content> </ion-modal-view>";
                                                                                                 // 6
      angular.module('angular-templates')                                                        // 7
        .run(['$templateCache', function($templateCache) {                                       // 8
          $templateCache.put(templateUrl, template);                                             // 9
        }]);                                                                                     // 10
                                                                                                 // 11
      module.exports = {};                                                                       // 12
      module.exports.__esModule = true;                                                          // 13
      module.exports.default = templateUrl;                                                      // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

},"profile.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/templates/profile.html                                                                 //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
      if (Meteor.isServer) return;                                                               // 2
                                                                                                 // 3
      var templateUrl = "/client/templates/profile.html";                                        // 4
      var template = "<ion-view title=\"Profile\"> <ion-nav-buttons side=\"right\"> <button ng-click=\"profile.updateName()\" ng-disabled=\"!profile.name || profile.name.length === 0\" class=\"button button-clear button-positive\">Done</button> </ion-nav-buttons> <ion-content class=\"profile\"> <a class=\"profile-picture positive\" ng-click=\"profile.updatePicture()\"> <div ng-if=\"profile.currentUser.profile.picture\"> <img ng-src=\"{{ profile.currentUser.profile.picture }}\" alt=\"profile picture\"> edit </div> <div ng-if=\"!profile.currentUser.profile.picture\" class=\"upload-placehoder\"> Add photo </div> </a> <div class=\"instructions\"> Enter your name and add an optional profile picture </div> <div class=\"list profile-name\"> <label class=\"item item-input\"> <input ng-model=\"profile.name\" on-return=\"profile.updateName()\" type=\"text\" placeholder=\"Your name\"> </label> </div> </ion-content> </ion-view>";
                                                                                                 // 6
      angular.module('angular-templates')                                                        // 7
        .run(['$templateCache', function($templateCache) {                                       // 8
          $templateCache.put(templateUrl, template);                                             // 9
        }]);                                                                                     // 10
                                                                                                 // 11
      module.exports = {};                                                                       // 12
      module.exports.__esModule = true;                                                          // 13
      module.exports.default = templateUrl;                                                      // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/templates/settings.html                                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
      if (Meteor.isServer) return;                                                               // 2
                                                                                                 // 3
      var templateUrl = "/client/templates/settings.html";                                       // 4
      var template = "<ion-view view-title=\"Settings\"> <ion-content> <div class=\"padding text-center\"> <button ng-click=\"settings.logout()\" class=\"button button-clear button-assertive\">Logout</button> </div> <ion-list> <ion-item href=\"#/profile\" class=\"item-icon-right\"> Profile <i class=\"icon ion-chevron-right icon-accessory\"></i> </ion-item> </ion-list> </ion-content> </ion-view> ";
                                                                                                 // 6
      angular.module('angular-templates')                                                        // 7
        .run(['$templateCache', function($templateCache) {                                       // 8
          $templateCache.put(templateUrl, template);                                             // 9
        }]);                                                                                     // 10
                                                                                                 // 11
      module.exports = {};                                                                       // 12
      module.exports.__esModule = true;                                                          // 13
      module.exports.default = templateUrl;                                                      // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

},"tabs.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/templates/tabs.html                                                                    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
      if (Meteor.isServer) return;                                                               // 2
                                                                                                 // 3
      var templateUrl = "/client/templates/tabs.html";                                           // 4
      var template = "<ion-tabs class=\"tabs-stable tabs-icon-top tabs-color-positive\" ng-cloak> <ion-tab title=\"Favorites\" icon-on=\"ion-ios-star\" icon-off=\"ion-ios-star-outline\" href=\"#/tab/favorites\"> <ion-nav-view name=\"tab-favorites\"></ion-nav-view> </ion-tab> <ion-tab title=\"Recents\" icon-on=\"ion-ios-clock\" icon-off=\"ion-ios-clock-outline\" href=\"#/tab/recents\"> <ion-nav-view name=\"tab-recents\"></ion-nav-view> </ion-tab> <ion-tab title=\"Contacts\" icon-on=\"ion-ios-person\" icon-off=\"ion-ios-person-outline\" href=\"#/tab/contacts\"> <ion-nav-view name=\"tab-contacts\"></ion-nav-view> </ion-tab> <ion-tab title=\"Chats\" icon-on=\"ion-ios-chatbubble\" icon-off=\"ion-ios-chatbubble-outline\" href=\"#/tab/chats\"> <ion-nav-view name=\"tab-chats\"></ion-nav-view> </ion-tab> <ion-tab title=\"Settings\" icon-on=\"ion-ios-cog\" icon-off=\"ion-ios-cog-outline\" href=\"#/tab/settings\"> <ion-nav-view name=\"tab-settings\"></ion-nav-view> </ion-tab> </ion-tabs>";
                                                                                                 // 6
      angular.module('angular-templates')                                                        // 7
        .run(['$templateCache', function($templateCache) {                                       // 8
          $templateCache.put(templateUrl, template);                                             // 9
        }]);                                                                                     // 10
                                                                                                 // 11
      module.exports = {};                                                                       // 12
      module.exports.__esModule = true;                                                          // 13
      module.exports.default = templateUrl;                                                      // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

}},"index.html.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// client/index.html.js                                                                          //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
            Meteor.startup(function() {                                                          // 2
              var attrs = {};                                                                    // 3
              for (var prop in attrs) {                                                          // 4
                document.body.setAttribute(prop, attrs[prop]);                                   // 5
              }                                                                                  // 6
            });                                                                                  // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"collections.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/collections.js                                                                            //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
module.export({Chats:function(){return Chats},Messages:function(){return Messages}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                 //
var Chats = new Mongo.Collection('chats');                                                       // 3
var Messages = new Mongo.Collection('messages');                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////

}],"methods.js":["meteor/meteor","meteor/check","../lib/collections",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// lib/methods.js                                                                                //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});var Chats,Messages;module.import('../lib/collections',{"Chats":function(v){Chats=v},"Messages":function(v){Messages=v}});
                                                                                                 // 2
                                                                                                 // 3
                                                                                                 //
Meteor.methods({                                                                                 // 5
  newMessage: function () {                                                                      // 6
    function newMessage(message) {                                                               // 5
      if (!this.userId) {                                                                        // 7
        throw new Meteor.Error('not-logged-in', 'Must be logged in to send message.');           // 8
      }                                                                                          // 10
                                                                                                 //
      check(message, Match.OneOf({                                                               // 12
        text: String,                                                                            // 14
        type: String,                                                                            // 15
        chatId: String                                                                           // 16
      }, {                                                                                       // 13
        picture: String,                                                                         // 19
        type: String,                                                                            // 20
        chatId: String                                                                           // 21
      }));                                                                                       // 18
                                                                                                 //
      message.timestamp = new Date();                                                            // 25
      message.userId = this.userId;                                                              // 26
                                                                                                 //
      var messageId = Messages.insert(message);                                                  // 28
      Chats.update(message.chatId, { $set: { lastMessage: message } });                          // 29
                                                                                                 //
      return messageId;                                                                          // 31
    }                                                                                            // 32
                                                                                                 //
    return newMessage;                                                                           // 5
  }(),                                                                                           // 5
  updateName: function () {                                                                      // 33
    function updateName(name) {                                                                  // 5
      if (!this.userId) {                                                                        // 34
        throw new Meteor.Error('not-logged-in', 'Must be logged in to update his name.');        // 35
      }                                                                                          // 37
                                                                                                 //
      check(name, String);                                                                       // 39
                                                                                                 //
      if (name.length === 0) {                                                                   // 41
        throw Meteor.Error('name-required', 'Must provide a user name');                         // 42
      }                                                                                          // 43
                                                                                                 //
      return Meteor.users.update(this.userId, { $set: { 'profile.name': name } });               // 45
    }                                                                                            // 46
                                                                                                 //
    return updateName;                                                                           // 5
  }(),                                                                                           // 5
  newChat: function () {                                                                         // 47
    function newChat(otherId) {                                                                  // 5
      if (!this.userId) {                                                                        // 48
        throw new Meteor.Error('not-logged-in', 'Must be logged to create a chat.');             // 49
      }                                                                                          // 51
                                                                                                 //
      check(otherId, String);                                                                    // 53
      var otherUser = Meteor.users.findOne(otherId);                                             // 54
                                                                                                 //
      if (!otherUser) {                                                                          // 56
        throw new Meteor.Error('user-not-exists', 'Chat\'s user not exists');                    // 57
      }                                                                                          // 59
                                                                                                 //
      var chat = {                                                                               // 61
        userIds: [this.userId, otherId],                                                         // 62
        createdAt: new Date()                                                                    // 63
      };                                                                                         // 61
                                                                                                 //
      var chatId = Chats.insert(chat);                                                           // 66
                                                                                                 //
      return chatId;                                                                             // 68
    }                                                                                            // 69
                                                                                                 //
    return newChat;                                                                              // 5
  }(),                                                                                           // 5
  removeChat: function () {                                                                      // 70
    function removeChat(chatId) {                                                                // 5
      if (!this.userId) {                                                                        // 71
        throw new Meteor.Error('not-logged-in', 'Must be logged to create a chat.');             // 72
      }                                                                                          // 74
                                                                                                 //
      check(chatId, String);                                                                     // 76
                                                                                                 //
      var chat = Chats.findOne(chatId);                                                          // 78
                                                                                                 //
      if (!chat || !_.include(chat.userIds, this.userId)) {                                      // 80
        throw new Meteor.Error('chat-not-exists', 'Chat not exists');                            // 81
      }                                                                                          // 83
                                                                                                 //
      Messages.remove({ chatId: chatId });                                                       // 85
                                                                                                 //
      return Chats.remove({ _id: chatId });                                                      // 87
    }                                                                                            // 88
                                                                                                 //
    return removeChat;                                                                           // 5
  }(),                                                                                           // 5
  updatePicture: function () {                                                                   // 89
    function updatePicture(data) {                                                               // 5
      if (!this.userId) {                                                                        // 90
        throw new Meteor.Error('not-logged-in', 'Must be logged in to update his picture.');     // 91
      }                                                                                          // 93
                                                                                                 //
      check(data, String);                                                                       // 95
                                                                                                 //
      return Meteor.users.update(this.userId, { $set: { 'profile.picture': data } });            // 97
    }                                                                                            // 98
                                                                                                 //
    return updatePicture;                                                                        // 5
  }()                                                                                            // 5
});                                                                                              // 5
///////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html"]});
require("./client/scripts/lib/app.js");
require("./lib/collections.js");
require("./lib/methods.js");
require("./client/scripts/controllers/chat.controller.js");
require("./client/scripts/controllers/chats.controller.js");
require("./client/scripts/controllers/confirmation.controller.js");
require("./client/scripts/controllers/login.controller.js");
require("./client/scripts/controllers/new-chat.controller.js");
require("./client/scripts/controllers/profile.controller.js");
require("./client/scripts/controllers/settings.controller.js");
require("./client/scripts/directives/input.directive.js");
require("./client/scripts/filters/calendar.filter.js");
require("./client/scripts/filters/chat-name.filter.js");
require("./client/scripts/filters/chat-picture.filter.js");
require("./client/scripts/services/new-chat.service.js");
require("./client/scripts/routes.js");
require("./client/templates/chat.html");
require("./client/templates/chats.html");
require("./client/templates/confirmation.html");
require("./client/templates/login.html");
require("./client/templates/new-chat.html");
require("./client/templates/profile.html");
require("./client/templates/settings.html");
require("./client/templates/tabs.html");
require("./client/index.html.js");