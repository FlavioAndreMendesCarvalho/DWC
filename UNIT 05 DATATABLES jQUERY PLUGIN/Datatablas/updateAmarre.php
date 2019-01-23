<?php

require_once '../conn.php';

$idAmarrament = $_POST['idAmarrament'];
$numeroAmarrament = $_POST['numeroAmarrament'];
$fondaria = $_POST['fondaria'];
$amplitud = $_POST['amplitud'];
$llargaria = $_POST['llargaria'];
$preu_dia = $_POST['preu_dia'];
$antelacio_max_reserva = $_POST['antelacio_max_reserva'];

$query_update = 'UPDATE amarrament SET numeroAmarrament = :numeroAmarrament, fondaria = :fondaria,
amplitud = :amplitud, llargaria = :llargaria, preu_dia = :preu_dia, antelacio_max_reserva = :antelacio_max_reserva WHERE idAmarrament = :idAmarrament';

try {
        $statement = $conn->prepare($query_update);
        $statement->bindValue(':idAmarrament', $idAmarrament);
        $statement->bindValue(':numeroAmarrament', $numeroAmarrament);
        $statement->bindValue(':fondaria', $fondaria);
        $statement->bindValue(':amplitud', $amplitud);
        $statement->bindValue(':llargaria', $llargaria);
        $statement->bindValue(':preu_dia', $preu_dia);
        $statement->bindValue(':antelacio_max_reserva', $antelacio_max_reserva);
        $statement->execute();
} catch (PDOException $e) {
    echo $e->getMessage();
}