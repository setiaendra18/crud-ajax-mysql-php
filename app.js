function tampilData() {
  $.getJSON("api/getDataMahasiswa.php", function (data) {
    let no = 1;
    $.each(data, function (i, data) {
      $("#tabel-mahasiswa").append(
        "<tr><td>" +
        no++ +
        "</td><td>" +
        data.nim +
        "</td><td>" +
        data.nama +
        "</td><td>" +
        data.kode_jur +
        "</td><td data-id=" +
        data.nim +
        '><button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modal-edit" id="tombol-edit" onclick="GetUserDetails('+       data.nim + 
        ')">EDIT</button> <button type="button" class="btn btn-danger btn-sm" id="tombol-hapus"  onclick="deleteRecord(' +
        data.nim +
        ')">HAPUS</button></td>'
      );
    });
  });
}
tampilData();

$(document).ready(function () {
  $("#tambah-data").click(function () {
    var data = $("#form-tambah").serialize();
    $.ajax({
      type: "POST",
      url: "api/addDataMahasiswa.php",
      data: data,
      success: function () {
        alert("Tambah Data Sukses")
        window.location.replace("index.html");
      }
    });
  });
});

function deleteRecord(nim) {
  if (confirm("Apakah anda yakin menghapus data ini ?")) {
    $.ajax({
      url: "api/deleteDataMahasiswa.php",
      type: "GET",
      data: "nim=" + nim,
      success: function () {
        alert("Delete Berhasil")
        window.location.replace("index.html");
      }
    });
  }
}

function GetUserDetails(nim)
{
  // Add User ID to the hidden field for furture usage
  $("#nim").val(nim);
  $.post("api/editDataMahasiswa.php", {
          nim: nim
      },
      function (data) {
          // PARSE json data
          var user = JSON.parse(data);
          // Assing existing values to the modal popup fields
          $("#modal-edit").find("input[name='nim']").val(user.nim);
          $("#modal-edit").find("input[name='update_nama']").val(user.nama);
          $("#modal-edit").find("select[name='update_kode_jur']").val(user.kode_jur);
      }
  );
}

function UpdateUserDetails()
{
  var nim = $("#nim").val();
  var nama =  $("#modal-edit").find("input[name='update_nama']").val();
  var kode_jur =  $("#modal-edit").find("select[name='update_kode_jur']").val();

  // Update the details by requesting to the server using ajax
  $.post("api/updateDataMahasiswa.php", {
          nim: nim,
          nama: nama,
          kode_jur:kode_jur,
      },
      function () {
            alert("Update Sukses")
            window.location.replace("index.html"); 
      }
  );
}

function cari() {
  
  var key = $("#input-cari").val();
  $.ajax({
    type: "POST",
    url: "api/searchDataMahasiswa.php",
    data: "key=" + key,
    success: function (data)
    {
      var dataCari = JSON.parse(data);
      var i = dataCari.length;
      console.log(i)
      let no=1;
      $.each(dataCari, function(i, data)
      {
        console.log(data.nama)
        $("#tabel-mahasiswa").replaceWith(
          "<tr><td>" +
          no++ +
          "</td><td>" +
          data.nim +
          "</td><td>" +
          data.nama +
          "</td><td>" +
          data.kode_jur +
          "</td><td data-id=" +
          data.nim +
          '><button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modal-edit" id="tombol-edit" onclick="GetUserDetails('+       data.nim + 
          ')">EDIT</button> <button type="button" class="btn btn-danger btn-sm" id="tombol-hapus"  onclick="deleteRecord(' +
          data.nim +
          ')">HAPUS</button></td>'
        );
        
      })
    }
  });
}



  