<?php 
require_once("conexao.php");
<<<<<<< HEAD
$tabela = 'plantas';
=======
$tabela = 'planta';
>>>>>>> 282b0a3 (up)

$postjson = json_decode(file_get_contents('php://input'), true);

    $id = @$postjson[$i]['id'];
    $nome = @$postjson[$i]['nome'];
    $habitat = @$postjson[$i]['habitat'];
    $porte = @$postjson[$i]['porte'];
    $flores = @$postjson[$i]['flores'];
    $frutifera = @$postjson[$i]['frutifera'];


$res = $pdo->prepare("INSERT INTO $tabela SET nome = :nome, habitat = :habitat, porte = :porte, flores = :flores, frutifera = :frutifera");	


$res->bindValue(":id", "$id");
$res->bindValue(":nome", "$nome");
$res->bindValue(":habitat", "$habitat");
$res->bindValue(":porte", "$porte");
$res->bindValue(":flores", "$flores");
$res->bindValue(":frutifera", "$frutifera");

$res->execute();

$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));

echo $result;

?>