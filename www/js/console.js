/**
 * Override console.log for debugging
 */

var device = '';

function timeNow() {
    var d = new Date(),
        h = (d.getHours()<10?'0':'') + d.getHours(),
        m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
        s = (d.getSeconds()<10?'0':'') + d.getSeconds();
    return h + ':' + m + ':' + s;
}

if(window.console && console.log){
    var old = console.log;
    console.log = function(){
        arguments[0] =  device + ' - ' + timeNow() +' > ' + arguments[0];
        old.apply(this, arguments)
    };

    console.log('console.log() was overridden.');
}

