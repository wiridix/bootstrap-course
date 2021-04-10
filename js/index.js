$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
    $('.carousel').carousel({
        interval: 1500
    })
    var colorReal = $('#modalcontacto').attr('class').split(' ')
    var colorCambio = 'btn-outline-warning'

    $('#modalContact').on('show.bs.modal', function(e){
        $('#modalcontacto').prop("disabled", true)
        $('#modalcontacto').removeClass(colorReal[1])
        $('#modalcontacto').addClass(colorCambio)
    })
    $('#modalContact').on('hide.bs.modal', function(e){
        $('#modalcontacto').prop("disabled", false)
        $('#modalcontacto').removeClass(colorCambio)
        $('#modalcontacto').addClass(colorReal[1])
    })
})