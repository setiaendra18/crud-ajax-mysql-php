function tampilData() {
    $.getJSON('api/getDataMahasiswa.php', function (data) {
        let no = 1;
        $.each(data, function (i, data) {
            $('#tabel-mahasiswa').append('<tr><td>' + no++ + '</td><td>' + data.nim + '</td><td>' + data.nama + '</td><td>' + data.kode_jur + '</td><td><button type="button" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modal-edit" id=' + data.nim + '>EDIT</button> <button type="button" class="btn btn-danger btn-sm" id=' + data.nim + '>HAPUS</button></td>')
        })
    });
}
tampilData();

$(document).ready(function () {
    $("#tambah-data").click(function () {
        var data = $('#form-tambah').serialize();
        $.ajax({
            type: 'POST',
            url: "api/addDataMahasiswa.php",
            data: data,
            success: function ()
            {
                load("index.html");
            }
        });
});
});

$(document).ready(function () {
    $("#btn-danger").click(function () {
        var del_id = $(this).attr('id');
        $.ajax({
            type: 'POST',
            url: "api/deleteDataMahasiswa.php",
            data: 'nim='+del_id,
            success: function () {
                load("index.html");
            }
        });
});
});
