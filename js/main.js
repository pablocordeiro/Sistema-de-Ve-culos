jQuery(document).ready(function() {
	$('[data-toggle="tooltip"').tooltip();

	$('.datepicker').datepicker({
	    format: 'dd/mm/yyyy',
	    language: 'pt-BR',
	    autoclose: true
	});	
});