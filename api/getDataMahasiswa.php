<?php
include "../config/db.php";
$sql = "SELECT * FROM tbl_mahasiswa";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) 
{
            $data=array();
            while($row = mysqli_fetch_assoc($result))
            {
                $data[]=$row;
            }
            $json_data=json_encode($data, JSON_PRETTY_PRINT);
            echo $json_data;
}
mysqli_close($conn);


?>
       