document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() 
{

    function onSuccess(pos) {
        $('.lat').html(pos.coords.latitude);
        $('.long').html(pos.coords.longitude);
    }
    
    function onError() {
        /*
    navigator.notification.confirm
    (
        "¿Seguro que quieres salir?",
         onConfirm,
        'Confirmación',
        ['SI','NO']
    );*/
        
    }

    $('#getIt').click(function() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    });
    
    $('#getIt').trigger( "click" );
}
