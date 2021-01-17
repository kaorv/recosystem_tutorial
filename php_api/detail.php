<?php
try {
    $dbh = new PDO('mysql:host=0.0.0.0;dbname=webapp', 'root', 'passwords');
    foreach($dbh->query("SELECT * FROM purchasehistory;") as $row) {
        echo $row["item"] . "  ";
        echo $row["time"] . "\n\n";
    };
    $dbh = null;
} catch (PDOException $e) {
    echo $e;
    die();
}
$dbh = null;

?>