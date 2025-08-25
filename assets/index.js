document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var currentYear = new Date().getFullYear();
    var options = {
        i18n: {
            months: [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ],
            monthsShort: [
                'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
            ],
            weekdays: [
                'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
            ],
            weekdaysShort: [
                'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'
            ],
            weekdaysAbbrev: ['D','L','M','M','J','V','S'],
            cancel: 'Cancelar',
            clear: 'Limpiar',
            done: 'Aceptar'
        },
        format: 'dd/mm/yyyy',
        yearRange: [currentYear - 120, currentYear], // Desde hace 49 años hasta el actual
        maxDate: new Date(), // No permite fechas futuras
        minDate: new Date(currentYear - 120, 0, 1) // Opcional: no permite fechas más antiguas
    };
    var instances = M.Datepicker.init(elems, options);
});