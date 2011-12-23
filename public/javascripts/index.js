var showCount = 0;
var showNumber = function(id, name) {
    $('#number-modal h3').html(name);
    $('#number-modal').modal({
        show: true,
        keyboard: true,
        backdrop: 'static'
    });
    if (!showCount) {
        $('#number-modal .btn.secondary').click(function() {
            $('#number-modal').modal('hide');
        });
    }
    showCount++;
};
