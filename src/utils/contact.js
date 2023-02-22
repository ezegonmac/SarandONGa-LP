jQuery('#contactUs-Form').on('submit',function(e){
    jQuery('#msg').html('');
    jQuery('#submit').html('Please wait');
    jQuery('#submit').attr('disabled',true);

    alert("Lo sentimos, el mensaje no se ha podido enviar con éxito. \n Intentaremos solucionarlo lo antes posible. \n Mientras tanto puedes contactarnos por email o redes sociales.")

    // jQuery.ajax({
    //    url:'assets/php/submit.php',
    //    type:'post',
    //    data:jQuery('#contactUs-Form').serialize(),
    //    success:function(result){
    //        jQuery('#msg').html(result);
    //        jQuery('#submit').html('Submit');
    //        jQuery('#submit').attr('disabled',false);
    //        jQuery('#contactUs-Form')[0].reset();
    //    }
    //});
    e.preventDefault();
});