/*
// Libraries which need a global variable, such as jQuery etc
globalVariable = function () {
}
*/

/**
 * Log : this simple function is used to keep track of things happening
 * @param message
 */
var log=function(message){
    var currentName=Router.current().route.getName();
    console.log('['+currentName+'] : '+message);

    /*var date = new Date()
    logs.insert( d.toUTCString() );
*/

}