<?php 

$e = strtoupper($_REQUEST["e"]);
$u = strtoupper($_REQUEST["u"]);

$to      = $e;
$subject = 'Confirm your E-Pulp account';
$message = 'Please click https://e-pulp.chriseld.com/verify.php?e=' . $e . '&u=' . $u . ' to finish your registration.';
$headers = 'From: noreply@ChrisEld.com';

mail($to, $subject, $message, $headers);

?>