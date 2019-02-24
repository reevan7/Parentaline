<?php

header("Access-Control-Allow-Origin: *");
if(isset($_POST['submit'])){
    $to = "dimitri@dimitri-talandier.fr"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['name'];
    $subject = "Demande de contact";
    $message = $first_name . " " . "vous a envoyé:" . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
  	header('location: https://dimitri-talandier.fr/merci.php');
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
