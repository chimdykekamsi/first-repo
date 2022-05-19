<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./4/w3.css">
    <link rel="stylesheet" href="./bootstrap.dest/bootstrap.css">
</head>
<body>
    <h2 class="w3-center">BUYER ACCOUNT</h2>
    <table class="table table-light">
        <thead class="thead-light">
            <tr>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style='text-transform:uppercase'><?php echo $_POST["username"]; ?></td>
                <td><?php echo $_POST["email"]; ?></td>
                <td><?php echo $_POST["psw"]; ?></td>
            </tr>
        </tbody>
       
    </table>
</body>
</html>