$(document).ready(function () {

        var table = $('#table_reserves').DataTable({
            dom: 'Bfrtip',
            ajax: {
                url: 'thePhp.php',
                dataSrc: '',
                type: "POST",
            },
            columns: [
                {data: 'idAmarrament'},
                {data: 'numeroAmarrament'},
                {data: 'fondaria'},
                {data: 'amplitud'},
                {data: 'llargaria'},
                {data: 'preu_dia'},
                {data: 'antelacio_max_reserva'}
            ],
            buttons: [
                {
                    extend: 'collection',
                    text: 'Ordena per...',
                    autoClose: true,
                    buttons: [
                        {
                            text: 'Puntuació Zona Ascendent',
                            action: function ( e, dt, node, config ) {
                                dt.order( [ 1, 'asc' ] ).draw();
                            }
                        },
                        {
                            text: 'Comissió Descendent',
                            action: function ( e, dt, node, config ) {
                                dt.order( [ 6, 'desc' ] ).draw();
                            }
                        }
                    ]
                },
                {
                    extend: 'print',
                    text: 'Print'
                },
                {
                    extend: 'csv',
                    text: 'CSV'
                },
                {
                    extend: 'excel',
                    text: 'Excel'
                },
                {
                    extend: 'copy',
                    text: 'Copy'
                },
                {
                    extend: 'pdf',
                    text: 'PDF'
                }
            ],
            select: {
                style: 'single',
                blurable: true
            },
            responsive: true,
            language: {
                url: '//cdn.datatables.net/plug-ins/1.10.19/i18n/Catalan.json'
            }
        });

        table.buttons().container().appendTo('#btn-primary');

        $('#btn_edit').hide();
        $('#btn_remove').hide();

        table.on('select deselect', function () {
            let selectedRows = table.rows({selected: true}).count();
            if (selectedRows === 0) {
                $('#btn_edit').hide();
                $('#btn_remove').hide();
            } else if(selectedRows === 1) {
                $('#btn_edit').show();
                $('#btn_remove').show();
            }
        });


        $('#btn_edit').click(function () {
            let selected_row_data = table.row({selected: true}).data();
            loadModalEdit(selected_row_data);
        });

        $('#btn_remove').click(function () {
            let selected_row_data = table.row({selected: true}).data();
            loadModalRemove(selected_row_data);
        });

        $('#btn_discard_changes').click(function () {
            $('#modal_edita_reserva').modal('hide');
        });

        $('#btn_save_changes').click(function () {
            //Save on DB
            let data = {
                'idAmarrament' : $('#idAmarrament').text(),
                'numeroAmarrament' : $('#numeroAmarrament').val(),
                'fondaria' : $('#fondaria').val(),
                'amplitud' : $('#amplitud').val(),
                'llargaria' : $('#llargaria').val(),
                'preu_dia' : $('#preu_dia').val(),
                'antelacio_max_reserva' : $('#antelacio_max_reserva').val()
            };
            $.ajax({
                data: data,
                url: 'updateAmarre.php',
                type: 'post',
                success: function () {
                    alert('Updated!');
                    table.ajax.reload();
                }
            });
        });

        $('#yes').click(function () {
            let data = {
                'idAmarrament' : $('#text_delete_id').text()
            };
            $.ajax({
                data: data,
                url: 'removeAmarre.php',
                type: 'post',
                success: function () {
                    alert('Removed!');
                    table.ajax.reload();
                }
            });
        });

        function loadModalEdit(row_data) {
            let idAmarrament = $('#idAmarrament').text(row_data['idAmarrament']);
            let numeroAmarrament = $('#numeroAmarrament').val(row_data['numeroAmarrament']);
            let fondaria = $('#fondaria').val(row_data['fondaria']);
            let amplitud = $('#amplitud').val(row_data['amplitud']);
            let llargaria = $('#llargaria').val(row_data['llargaria']);
            let preu_dia = $('#preu_dia').val(row_data['preu_dia']);
            let antelacio_max_reserva = $('#antelacio_max_reserva').val(row_data['antelacio_max_reserva']);
        }

        function loadModalRemove(row_data) {
            let idAmarrament = $('#text_delete_id').text(row_data['idAmarrament']);
        }
    }
);