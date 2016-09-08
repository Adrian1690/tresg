<?php 


$nombre 	=htmlspecialchars($_POST["nombre"]);
$correo 	=htmlspecialchars($_POST["correo"]);
$telefono 	=htmlspecialchars($_POST["telefono"]);
$mensaje 	=htmlspecialchars($_POST["mensaje"]);

if(!$nombre || !$correo || !$telefono || !$mensaje){
	echo 'No access ...';
	exit();
}



/*echo $nombre;
echo $correo;
echo $telefono;
echo $mensaje;
exit();*/



$to = 'bob@tutamanta.pe'; // Cambiar a Cecília.
//$to = 'adrian@e-quipu.pe'; // Cambiar a Cecília.
$subject = 'MENSAJE 3G';

$message .=  "Este mensaje es enviado desde el formularo de la web Tres Generaciones.\r\n\r\n";
$message .=  "Nombre : " . $nombre. "\r\n";
$message .=  "Telefono : " . $telefono. "\r\n";
$message .=  "Mensaje : " . $mensaje. "\r\n";

//$headers  = 'MIME-Version: 1.0' . "\r\n";
//$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers = "From: $name < $correo >" . "\r\n";
//$headers .= "Reply-To: j.adrian.1690@gmail.com" . "\r\n";

//$headers = "From: $name < $correo >" . "\r\n" .
    //'Reply-To: webmaster@example.com' . "\r\n" .
//    'X-Mailer: PHP/' . phpversion();

 if( mail($to,$subject,$message, $headers) )
 {
  	echo json_encode( array( "Result" => "OK", "Message" => "Mensaje Enviado."));
 }else{
 	echo json_encode( array( "Result" => "ERROR", "Message" => "No se pudo enviar el mensaje.."));
 }
?>