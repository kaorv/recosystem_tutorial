<?php
try {
    $dbh = new PDO('mysql:host=mysql;dbname=webapp', 'root', 'passwords');
    foreach($dbh->query("SELECT * FROM purchasehistory;") as $row) {
        echo $row["item"] . "  ";
        echo $row["buydate"] . "\n\n";
    };
    $dbh = null;
} catch (PDOException $e) {
    echo $e;
    die();
}
$dbh = null;

?>