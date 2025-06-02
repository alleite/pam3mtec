<?php 
require_once("conexao.php");
$tabela = 'planta';

$postjson = json_decode(file_get_contents('php://input'), true);

$nome = @$postjson['nome'];
$habitat = @$postjson['habitat'];
$porte = @$postjson['porte'];
$flores = @$postjson['flores'];
$frutifera = @$postjson['frutifera'];

$res = $pdo->prepare("INSERT INTO $tabela (nome, habitat, porte, flores, frutifera) VALUES (:nome, :habitat, :porte, :flores, :frutifera)");

$res->bindValue(":nome", $nome);
$res->bindValue(":habitat", $habitat);
$res->bindValue(":porte", $porte);
$res->bindValue(":flores", $flores);
$res->bindValue(":frutifera", $frutifera);

$res->execute();

$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));

echo $result;
?>