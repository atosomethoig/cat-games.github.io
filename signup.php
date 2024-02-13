<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = $_POST["email"];
  $subject = "Welcome to Cat Games";
  $message = "Dear Cat Games Enthusiast,\n\nThank you for signing up to Cat Games!\n\nBest regards,\nThe Cat Games Team";

  $headers = "From: catgamesofficialcompany@gmail.com";

  mail($to, $subject, $message, $headers);
}
?>
