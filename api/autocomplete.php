<?php
include "../config/db.php";
$searchTerm = $_GET['term'];
//get matched data from skills table
$query = $db->query("SELECT * FROM tbl_mahasiswa WHERE nama LIKE '%".$searchTerm."%' ORDER BY nim ASC");
while ($row = $query->fetch_assoc()) {
    $data[] = $row['nama'];
}
//return json data
echo json_encode($data)

?>