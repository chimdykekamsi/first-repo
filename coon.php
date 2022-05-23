<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "real solutions";


    $coon = mysqli_connect($servername, $username, $password, $dbname);

    if (! $coon) {
        die ("connection failed: " .mysqli_connect_error());
    }
    echo "connected succesfully";
?>