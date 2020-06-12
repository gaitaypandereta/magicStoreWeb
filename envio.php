<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title> Infantil</title>   
	<link rel="shortcut icon" type="image/x-icon" href="img/favicon.png"/>
    <link rel="stylesheet" type="text/css" href="styles/envio.css" />
    <link href="https://fonts.googleapis.com/css2?family=Sail&display=swap" rel="stylesheet">
    
    <?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception; 
    //Descargar todo esto de https://github.com/PHPMailer/PHPMailer, abrirlo y meterlo en la misma carpeta 
    //Desmarcar gmail para que lo permita ->seguridad ->acceso de aplicaciones poco seguras 
    require 'Exception.php';
    require 'PHPMailer.php';
    require 'SMTP.php';
  
    $operacion = $_POST['operacion'];
   if (($operacion==2) &&  isset($_POST['texto']) && isset($_POST['titulo'])) {  
         
         $usuario  ="ZoytuChiquiWeb"; 
         $texto    = $_POST['texto'];
         $titulo   = $_POST['titulo'];
    try{
		 
     $email_user = "macedaluar@gmail.com";
     $email_password = "------";
     $the_subject = $titulo;
     $address_to = "analugoluar@gmail.com";
     $from_name = $usuario;
     $phpmailer = new PHPMailer();
     // ---------- datos de la cuenta de Gmail -------------------------------
     $phpmailer->Username = $email_user;
     $phpmailer->Password = $email_password; 
     //-----------------------------------------------------------------------
   
     $phpmailer->SMTPDebug = 1;
     $phpmailer->SMTPSecure = 'ssl';
     $phpmailer->Host = "smtp.gmail.com"; // GMail
     $phpmailer->Port = 465;
     $phpmailer->IsSMTP(); // use SMTP
     $phpmailer->SMTPAuth = true;
     $phpmailer->setFrom($phpmailer->Username,$from_name);
     $phpmailer->AddAddress($address_to); // recipients email
     $phpmailer->Subject = $the_subject;	
      if ($_FILES['fichero']) {
		$phpmailer->AddAttachment($_FILES['fichero']['tmp_name'], $_FILES['fichero']['name']);
      } 
   
     $phpmailer->Body = $texto."<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
     $phpmailer->IsHTML(true);
     if( $phpmailer->Send())
           echo 'Se ha enviado correctamene. Gracias por participar';
     else
          echo 'Lo sentimos no pudo ser';      
     } catch (Exception $e) {
         echo 'Lo sentimos, no ha podido ser.Inténtalo más tarde';
         echo 'Mailer Error: ' . $mail->ErrorInfo;
     }
 // header("Location: index.html");
  }
 ?>
   
 </head>
 <body >
  
		
     <header class="fondo">
	    <svg width=250  height=210>
          <text x=30 y=90 style="font: normal 1em Sail; fill: navy;">
            <tspan style="font: bold 9.3em 'Sail'; fill: green;">z</tspan>
            <tspan style="font: bold 5em 'Sail'; fill: red;">0</tspan>
            <tspan style="font: bold 4em 'Sail'; fill:'#1B5583';">y</tspan>
          </text>
          <path id="ruta1" d="M70,110 c0,-60 130,-170 40,-15 s20,110 90,-15 m130,180 z" 
          fill="none" stroke="red" stroke-width="5"/>
          <ellipse cx="0" cy="3" rx="15" fill="orange" stroke="18" stroke-width="1">
            <animateMotion dur="6s" rotate="auto" repeatCount="indefinite">
              <mpath xlink:href="#ruta1" />
            </animateMotion>
         </ellipse>
         <text x=98 y=90 style="font: normal 1em arial; fill: navy;">
            <tspan style="font: bold 5em 'Sail'; fill: red;">0</tspan>
         </text>
       </svg>    
    </header>
    <div class="content">
      <aside>  
		   <h1> Envíanos lo que tu quieras </h1>
                 <form method="POST" action="recibo.html" enctype="multipart/form-data">
                       <input type="hidden" name="operacion" value="2"/>
                    
					<div>
                       <span>Subir tu Archivo:</span>
                       <input type="file" name="fichero" />
                    </div>
                    <div>
                       <span>Título</span>
                       <input type="text" name="titulo" placeholder="Título" required />
                    </div>
                    <textarea   name="texto"  rows="4" placeholder="Tu historia" cols="50" required>
                    </textarea>
					 <input type="submit"  name="submit" value="ENVIAR"  /> 
              </form>
		   
      </aside>
   </div>  
  </body>
</html>
