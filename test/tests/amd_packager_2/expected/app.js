define('/app', ['require', 'util', 'util/each'],function(require) {
    var util = require('util');
    var each = require('util/each');


    return function init() {
        each([], function() {
            // empty
        });
    }
});