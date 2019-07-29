window.editableChangeHandlers = [function(e, ed) {

    var $el = $(e.target.targetElm);
    var $update = null;

    if ($el.hasClass('col-0')) {
        var colClass = 'col-0';
        var $update = $('.col-0.monthly-payment');
    } else if ($el.hasClass('col-1')) {
        var colClass = 'col-1';
        var $update = $('.col-1.monthly-payment');
    } else if ($el.hasClass('col-2')) {
        var colClass = 'col-2';
        var $update = $('.col-2.monthly-payment');
    }
    if ($update) {
        var taxes = $('.taxes.' + colClass).text().replace(/[^\d|^\.]/g, '');
        var insurance = $('.insurance.' + colClass).text().replace(/[^\d|^\.]/g, '');
        var monthlyPi = $('.monthly-pi.' + colClass).text().replace(/[^\d|^\.]/g, '');
        var monthlyMi = $('.monthly-mi.' + colClass).text().replace(/[^\d|^\.]/g, '');
        var totalMonthly = (1 * taxes) + (1 * insurance) + (1 * monthlyPi) + (1 * monthlyMi);
        $update.html('$' + totalMonthly.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }));
    }
}];