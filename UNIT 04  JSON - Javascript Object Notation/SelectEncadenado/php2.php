<?php
require_once '../conn.php';
try{
    $mbd = new PDO($dsn, $user, $pass);
    $idPort = $_GET["port"];
    $statement = $mbd->prepare("SELECT * FROM zona WHERE idPort = :idPortt");
    $statement->bindParam(':idPortt', $idPort);
    $statement->execute();

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);

    $mbd = null;

} catch (PDOException $e){
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}