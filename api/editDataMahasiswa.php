<?php
include "../config/db.php";

 
// check request
if(isset($_POST['nim']) && isset($_POST['nim']) != "")
{
    // get User ID
    $nim= $_POST['nim'];
 
    // Get User Details
    $query = "SELECT * FROM tbl_mahasiswa WHERE nim = '$nim'";
    if (!$result = mysqli_query($conn, $query)) {
        exit(mysqli_error($con));
    }
    $response = array();
    if(mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $response = $row;
        }
    }
    else
    {
        $response['status'] = 200;
        $response['message'] = "Data not found!";
    }
    // display JSON data
    echo json_encode($response);
}
else
{
    $response['status'] = 200;
    $response['message'] = "Invalid Request!";
}
?>
       