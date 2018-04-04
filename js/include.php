<?php

include 'connect.php';

   if($_POST['text'] && !empty($_POST['text']))
   {
     $name = $_POST['text'];

     $query_check = "SELECT * FROM `names`";
     $query_check_run = mysql_query($query_check);

     while($query_result = mysql_fetch_assoc($query_check_run))
     {
       $name_check = $query_result['name'];
       if($name == $name_check)
       {
         die("name already exit");

       }
     }
         $query = "INSERT INTO `ajax`.`names` (`id`, `name`) VALUES (NULL, '$name')";

         $query_run = mysql_query($query);
         echo "$name is inserted to database";

     }
   else {
     echo "not ok";
   }


 ?>
