(() => {
  'use strict';
  const token = localStorage.getItem('token');
  if (!token) {
    localStorage.clear();
    changeView('');
  }
})();
$(document).ready(function () {
  if (!fullname) fullname = localStorage.getItem('fullname');
  if (!role) role = localStorage.getItem('activeRole');
  $('#fullname').text(fullname);
  $('#fullname2').text(fullname);
  $('#role').text(role);
  const table = document.getElementById('incidencesTable');
  new DataTable(table, {
    columnDefs: [{ orderable: false, targets: 4 }],
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
    },
  });
});
