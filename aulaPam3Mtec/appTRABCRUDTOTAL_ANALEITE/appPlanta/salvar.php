<?php 
require_once("conexao.php");
$tabela = 'turismo';

$postjson = json_decode(file_get_contents('php://input'), true);

$cidade = @$postjson['cidade'];
$estado = @$postjson['estado'];
$transporte = @$postjson['transporte'];

$res = $pdo->prepare("INSERT INTO $tabela SET cidade = :cidade, estado = :estado, transporte = :transporte");	


$res->bindValue(":cidade", "$cidade");
$res->bindValue(":estado", "$estado");
$res->bindValue(":transporte", "$transporte");

$res->execute();

$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));

echo $result;

?>