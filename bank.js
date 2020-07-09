<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '<?php
$con=mysqli_connect("localhost","root","", "bank");
if(mysqli_connect_errno())
{
echo "<scr'+'ipt>alert(\'Connecton Fail\');</scr'+'ipt>";
}
if(isset($_POST[\'getdetails\']))
{
$account=$_POST[\'account\'];
$ret=mysqli_query($con,"select name,ifsc,address from customer where account=\'$account\' " );
while ($row=mysqli_fetch_assoc($ret)) 
{ 
  echo $row[\'ifsc\']; 
  echo  $row[\'name\'];
  echo  $row[\'address\'];
}
}
else
if(isset($_POST[\'getname\']))
{
$swift=$_POST[\'swift\'];
$ret=mysqli_query($con,"select name from customer where swiss=\'$swift\' " );
while ($row=mysqli_fetch_assoc($ret)) 
{ 
  echo  $row[\'name\'];
}
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Bank</title>
</head>
<body>
<form action="Bank.php" method="post">
Enter Account Number<input type="text" name="account">
<input type="submit" name="getdetails" value="Get Details">
<br>
Enter Swift Code<input type="text" name="swift">
<input type="submit" name="getname" value="Get Bank Name"> 
<br>
</form>
</body>
</html>'

document.write(pagecode);

</script>