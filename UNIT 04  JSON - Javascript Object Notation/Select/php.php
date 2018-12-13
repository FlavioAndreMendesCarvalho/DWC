<?php
require_once 'conn.php';
try{

    $mbd = new PDO($dsn, $user, $pass);

    $statement = $mbd->prepare("SELECT * FROM persona");
    $statement->execute();

    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);

    $mbd = null;

} catch (PDOException $e){
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}