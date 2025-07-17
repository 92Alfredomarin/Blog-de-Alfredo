<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$to = "alfredomarin.92@gmail.com";
$subject = "Nuevo mensaje desde tu blog";
$headers = "From: $email";

mail($to, $subject, "Nombre: $nombre\nCorreo: $email\n\nMensaje:\n$mensaje", $headers);

echo "Gracias por tu mensaje, $nombre.";
?>
