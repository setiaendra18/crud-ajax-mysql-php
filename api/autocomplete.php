<?php
include "../config/db.php";

$data = array();
if (!empty($_GET['nama'])) {
    $nama = strtolower(trim($_GET['nama']));
    $sql = "SELECT name FROM tbl_mahasiswa where LOWER(name) LIKE '" .$nama. "%'";
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($data, $row['nama']);
    }
}
echo json_encode($data);exit;

?>