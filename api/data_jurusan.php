<?php
include "../config/db.php";
$sql = "SELECT * FROM tbl_jurusan";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) 
{
            $data=array();
            while($row = mysqli_fetch_assoc($result))
            {
                $data[]=$row;
            }
            $json_data=json_encode($data);
            echo $json_data;
}
mysqli_close($conn);
?>
       