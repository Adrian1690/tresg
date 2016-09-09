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
$subject = "Mensaje enviado por pagina web Tres Generaciones: $nombre.";

$message .=  "Este mensaje es enviado por página web Tres Generaciones: $nombre.\r\n\r\n";
$message .=  "Nombre : " . $nombre. "\n";
$message .=  "E-mail : " . $correo. "\n";
$message .=  "Telefono : " . $telefono. "\n";
$message .=  "Mensaje : " . $mensaje. "\n";

//$headers  = 'MIME-Version: 1.0' . "\r\n";
//$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers = "From: $correo" . "\n";
//$headers .= "Reply-To: $email_address";
//$headers .= "Reply-To: j.adrian.1690@gmail.com" . "\r\n";

//$headers = "From: $name < $correo >" . "\r\n" .
//'Reply-To: webmaster@example.com' . "\r\n" .
//    'X-Mailer: PHP/' . phpversion();

if( mail($to,$subject,$message, $headers) )
{
	echo json_encode( array( "Result" => "OK", "Message" => "Mensaje Enviadoo."));
}else{
	echo json_encode( array( "Result" => "ERROR", "Message" => "No se pudo enviar el mensaje.."));
}
?>