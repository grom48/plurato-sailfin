<?php
#Prije svega morate omogućiti pristup za manje sigurne aplikacije na vašem google računu
use PHPMailer\PHPMailer\PHPMailer;

require_once 'PHPMailer/Exception.php';
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $message = $_POST['message'];

    try{
        $mail->isSMTP();
        $mail->Host = ''; #domena ili mail.domena.com
        $mail->SMTPAuth = true;
        $mail->Username = ''; # vaš host email račun koji koristite kao SMTP server
        $mail->Password = ''; # vaš host šifra email računa
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; # može b
        $mail->Port = 587; # može bit i 465iti i ssl

        $mail->setFrom('');# vaš host email račun koji koristite kao SMTP server
        $mail->addAddress('');#email adresa gdje želite primati emailove

        $mail->isHTML(true);
        $mail->Subject = 'Message Received (Contact Page)';
        $mail->Body = "<h3>Name: $name <br>Email: $email <br>Message: $message</h3>";

        $mail->send();
        $alert = '<div class="alert-success">
                    <span>Message Sent! Thank you for contacting us. </span>   
                </div>';
    } catch (Exception $e) {
        $alert = '<div class="alert-error">
                    <span>'.$e->getMessage().'</span>
                </div>';
    }
}
