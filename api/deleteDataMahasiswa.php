<?php
include "../config/db.php";
$nim=$_GET['nim'];
$sql = "DELETE FROM tbl_mahasiswa WHERE nim='$nim'";
if ($conn->query($sql) === TRUE)
{
   	
} else {
    echo "Error deleting record: " . $conn->error;
}
$conn->close();
?>
       