<?php

$num = $_GET['num'];
$result = '';

for($i = 1; $i <= $num; $i++){
    $result .= "<br>".$i;
}

echo $result;

?>