<?php 

include_once('conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);

<<<<<<< HEAD
 $query = $pdo->prepare("UPDATE plantas SET nome = :nome, habitat = :habitat, porte= :porte, flores= :flores, frutifera= :frutifera WHERE id = :id ");
=======
 $query = $pdo->prepare("UPDATE planta SET nome = :nome, habitat = :habitat, porte= :porte, flores= :flores, frutifera= :frutifera WHERE id = :id ");
>>>>>>> 282b0a3 (up)

       $query->bindValue(":nome", $postjson['nome']);
       $query->bindValue(":habitat", $postjson['habitat']);
       $query->bindValue(":porte", $postjson['porte']);
       $query->bindValue(":flores", $postjson['flores']);
       $query->bindValue(":frutifera", $postjson['frutifera']);
       $query->bindValue(":id", $postjson['id']);
      
       $query->execute();
  
             
  
      if($query){
        $result = json_encode(array('success'=>true));
  
        }else{
        $result = json_encode(array('success'=>false));
    
        }
     echo $result;


?>

