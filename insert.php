<?php
    require ("./coon.php");

    if (isset($_POST['submit'])) {
        $gender = $_POST['gender'];
        $email = $_POST['email'];
        $psw = $_POST['psw'];
        $state = $_POST['state'];
        $username = $_POST['username'];
        
    }


$sql =" INSERT INTO `userdetails` ( `gender`, `email`, `password`, `state`, `username`) VALUES ('$gender' , ' $email' , ' $psw' , '$state' , ' $username' )";

if (mysqli_query($coon, $sql)) {
   echo "sucesfull";
}
else {
    echo"error: ". mysqli_error($coon);
}
mysqli_close($coon);
?>