Meteor.startup(function () {
    Session.set('navbar',false); // this is a session variable to check whether or not the navbar is to be shown or not, whihc is generally handled by the login


    /**
     *  Handlebars global helpers
     *  These helpers are here to make the developer's life easier by making some handlebars reactables available everywhere, meaninng there is no reason
     *  to create single helpers for the templates
     */



    Handlebars.registerHelper('navbar',function(input){
        return Session.get("navbar");
    });


    /**
     * Global Trackers
     *
     */
    // this tracker is used to make sure that whenever someone logs out, he is taken back to the login screen
    Tracker.autorun(function(){
        var logStatus=Meteor.user();
        if(logStatus==null){
            Router.go('login');
        }
    })

});