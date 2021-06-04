<?php


    $error = false;
    $sent = false;

    if(isset($_POST['submit'])) {
        if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['comments'])) {
            $error = true;
        }
        else {
            $to = "mananpatel.9825@gmail.com";

            $name = trim($_POST['name']);
            $email = trim($_POST['email']);
            $comments = trim($_POST['comments']);

            $subject = "Contact Form";
            $message =  "Name: $name \r\n Email: $email \r\n Comments: $comments";
            $headers = "From:" . $name;
            $mailsent = mail($to, $subject, $message, $headers);

            if($mailsent) {
                $sent = true;
            }
        }
    }

?>