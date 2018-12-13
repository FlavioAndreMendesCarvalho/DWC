<?php

require_once "../conn.php";

$idPort = $_GET["idPort"];
$query = 'SELECT * FROM zona WHERE idPort = :idPort';

try {
    $statement = $conn->prepare($query);
    $statement->bindParam(':idPort', $idPort);
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    print $e->getMessage();
}

echo json_encode($result);
