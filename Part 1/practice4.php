<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Multiplication Table</title>
	<link rel="stylesheet" href="practice4php.css" media="screen"/>
</head>
<body>
	
	<div class="container">
		
	<form method="post">
		<label>Enter a number:</label>
		<input type="number" name="number">
		<input type="submit" value="Submit">
	</form>

	<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$number = $_POST["number"];

		echo "<h1>Multiplication Table from 1 to $number</h1>";
		echo "<table>";
		echo "<tr><td></td>";
			for ($i = 1; $i <= $number; $i++) {
				echo "<td>$i</td>";
			}
		echo "</tr>";
		echo "<tr>";
			$zero = 0;
			echo "<th colspan=" . ($number + 1) . "><hr width=" . (100) ."%></th>";
		echo "</tr>";
		for ($i = 1; $i <= $number; $i++) {
			echo "<tr><td>$i</td>";
			for ($j = 1; $j <= $number; $j++) {
				echo "<td><b>" . ($i * $j) . "</b></td>";
			}
			echo "</tr>";
		}
		echo "</table>";
	}
	?>
	</div>
</body>
</html>
