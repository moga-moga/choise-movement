const MogaDom = require('moga-dom')

$.fn.extend({
    choiseMovement: function (options: object) {
        $("#choiseMovement").append(MogaDom.getDivDom());
    }
});

