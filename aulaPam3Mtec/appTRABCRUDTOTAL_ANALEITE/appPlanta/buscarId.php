<?php 

include_once('conexao.php');

$id = $_GET['id'];

$query = $pdo->query("SELECT * from turismo where id = '$id'");

 $res = $query->fetchAll(PDO::FETCH_ASSOC);

 	for ($i=0; $i < count($res); $i++) { 
      foreach ($res[$i] as $key => $value) {
      }
 		
    $id = $res[$i]['id'];
    $nome = $res[$i]['nome'];
    $habitat = $res[$i]['habitat'];
    $porte = $res[$i]['porte'];
    $flores = $res[$i]['flores'];
    $frutifera = $res[$i]['frutifera'];


 		}

        if(count($res) > 0){
                $result = json_encode(array('success'=>true, 'id'=>$id, 'nome'=>$nome, 'habitat'=>$habitat, 'porte'=>$porte, 'flores'=>$flores, 'frutifera'=>$frutifera));

            }else{
                $result = json_encode(array('success'=>false, 'result'=>'0'));

            }
            echo $result;

 ?>