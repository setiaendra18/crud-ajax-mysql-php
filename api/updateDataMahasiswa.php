<?php
include "../config/db.php";


    $nama = $_POST['nama'];
    $nim = $_POST['nim'];
    $kode_jur = $_POST['kode_jur'];
 
    
    $query = "UPDATE tbl_mahasiswa SET nama='$nama' , kode_jur='$kode_jur' WHERE nim='$nim' " ;
    if (!$result = mysqli_query($conn, $query))
    {
        exit(mysqli_error($conn));
    }

?>