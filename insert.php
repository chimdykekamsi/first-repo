<?php
    require ("./coon.php");

    if (isset($_POST['submit'])) {
        $gender = $_POST['gender'];
        $email = $_POST['email'];
        $psw = $_POST['psw'];
        $state = $_POST['state'];
        $user = $_POST['username'];
       
        
    }


$sql =" INSERT INTO `buyer db` ( `username`, `email`, `password`, `state`, `gender` ) VALUES ('$user' , ' $email' , ' $psw' , '$state' , ' $gender')";

if (mysqli_query($coon, $sql)) {
   echo "sucesfull";
}
else {
    echo"error: ". mysqli_error($coon);
}
mysqli_close($coon);
?>