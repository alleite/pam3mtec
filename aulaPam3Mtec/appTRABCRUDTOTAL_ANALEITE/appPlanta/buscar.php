<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);


$query = $pdo->prepare("SELECT * from planta");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {  }      

    $dados[] = array(
        'id' => $res[$i]['id'],
        'nome' => $res[$i]['nome'],
        'habitat' => $res[$i]['habitat'],
        'porte' => $res[$i]['porte'],
        'flores' => $res[$i]['flores'],
        'frutifera' => $res[$i]['frutifera']
      
       
                         
    );

    }

   if(count($res) > 0){
           $result = json_encode(array('success'=>true, 'result'=>$dados));

       }else{
           $result = json_encode(array('success'=>false, 'result'=>'0'));

       }

echo $result;

?>