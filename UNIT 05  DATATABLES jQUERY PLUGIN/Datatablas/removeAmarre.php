<?php

require_once '../conn.php';

$idAmarrament = $_POST['idAmarrament'];

$query_delete = 'DELETE FROM amarrament WHERE idAmarrament = :idAmarrament';

try {
    $statement = $conn->prepare($query_delete);
    $statement->bindValue(':idAmarrament', $idAmarrament);
    $statement->execute();
} catch (PDOException $e) {
    echo $e->getMessage();
}