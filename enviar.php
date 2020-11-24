<?php

$destino = "unfotografomascuu@gmail.com";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nCorreo:" . $correo . "\nMensaje:" . $mensaje;
mail($destino,"Correo enviado con el Footer de la Pagina",$contenido);
header("Location:index.html");

?>

