(function($) {

$.fn.moneyAmount = function() {
    this.keypress(function(event) {
        var value = $(this).val();
        var containsPoint = value.indexOf('.') != -1;
        var containsComma = value.indexOf(',') != -1;
        var containsDecimalSeparator = containsComma || containsPoint;
        const DELETE_KEY = 46;
        const NUMBER_0_KEY = 48;
        const NUMBER_9_KEY = 57;
        if ((event.which != DELETE_KEY || containsDecimalSeparator) && (event.which < NUMBER_0_KEY || event.which > NUMBER_9_KEY)) {
            event.preventDefault();
        }
    });
};

})(jQuery);
