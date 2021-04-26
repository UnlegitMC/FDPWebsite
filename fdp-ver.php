<?php
//header :(
$fdp_version="-"; // <- version here
header('Access-Control-Allow-Origin:*');
if($_GET["browser"]=="true"){
    echo('var versionElement=document.getElementById("version");');
}else{
    echo('{"version":"'.$fdp_version.'"}');
}