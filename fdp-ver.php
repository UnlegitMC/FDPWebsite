<?php
//header :(
$fdp_version="-"; // <- version here
header('Access-Control-Allow-Origin:*');
echo('{"version":"'.$fdp_version.'"}');