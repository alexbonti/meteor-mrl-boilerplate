Template['login'].helpers({
});

Template['login'].events({
    'submit #login-form':function(e,t){
        e.preventDefault();
        var username = t.find('#login-username').value;
        var password = t.find('#login-password').value;
        Meteor.loginWithPassword(username, password, function(err){
            if (err){
                log('Failed login : '+username+' attempted to login with '+password);
            }
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed.
            else{
                log(Meteor.user().username);
                Session.set('navbar',true);
                Router.go('dashboard');


            }
            // The user has been logged in.
        });

        return false;
    }

});

Template.login.rendered=function(){
    Session.set('navbar',false);
    Meteor.logout();

};
