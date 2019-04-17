<?php
include "../config/db.php";
//Mengambil isi parameter cari
$cari = $_GET['cari'];
 
if ( !empty ( $cari ) ) {
 
 //Query sql untuk mencari data
 $sql = mysql_query("SELECT nama from tbl_mahasiswa where nama LIKE '%$cari%'");
 
 //Cek apakah data ditemukan
 $row = mysql_num_rows( $sql );
 
 //Jika ditemukan maka tampilkan
 if ( $row != 0 ) {
 
  while ( $r = mysql_fetch_assoc( $sql ) ) {
   echo $r['nama'] . "
";
  }
 
 //Jika tidak ditemukan tampilkan pesan berikut
 } else { echo "Tidak menemukan data"; }
 
}
?>