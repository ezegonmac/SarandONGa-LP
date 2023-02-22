<?php

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['comment'])){
	$name=$_POST['name'];
	$email=$_POST['email'];
	$subject=$_POST['subject'];
	$comment=$_POST['comment'];
	
	
	
	$html="<table><tr><td>Name:</td><td>$name</td></tr><tr><td>Email:</td><td>$email</td></tr><tr><td>Subject:</td><td>$subject</td></tr><tr><td>Comment:</td><td>$comment</td></tr></table>";
	
	include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);

	// smtp Settings
	$mail->isSMTP(); // Set mailer to use SMTP
	$mail->Host="smtp.gmail.com"; // SMTP servers
	$mail->Port=587; //specify SMTP Port
	$mail->SMTPSecure="tls"; // Enable TLS encryption, `ssl` also accepted
	$mail->SMTPAuth=true; // Enable SMTP authentication
	$mail->Username="isppgrupo12@gmail.com";  // Your Mail
	$mail->Password="Your App Password"; // Your app password
	// TODO: ADD PASSWORD

	$mail->setFrom($email, $name);
	$mail->addAddress("isppgrupo12@gmail.com", "Sarandonga"); // (Your Mail) An email address that will receive the email with the output of the form

	$mail->IsHTML(true); // Set email format to HTML

	$mail->Subject = "(Sarandonga) Nuevo Mensaje de Contacto";
	$mail->Body = $html;

	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));

	$msg="";
	
	if($mail->send()){
		//echo "Mail send";
		$msg="Mensaje enviado correctamente";
	}else{
		//echo "Error occur";
		$msg="Error al enviar el mensaje";
	}
	echo $msg;
}
?>