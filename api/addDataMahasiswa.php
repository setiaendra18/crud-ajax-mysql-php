<?php
include "../config/db.php";
$nama = $_POST['nama'];
$nim = $_POST['nim'];
$kode_jur = $_POST['kode_jur'];

$sql = "INSERT INTO tbl_mahasiswa (nim, nama,kode_jur)
VALUES ('$nim', '$nama','$kode_jur')";

if (mysqli_query($conn, $sql)) {

} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
