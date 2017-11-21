function add (text){
	var element = $('<li> <span></span> <button class="possible">Удалить</button> </li>');
	$('span', element).text(text);
	$("div#root ul").append(element);
	$('.possible', element).click( function () {
		$(this).parent().remove();
	});
}



jQuery(document).ready(function() {
	$("div#root").append("<ul></ul>");										
	add("Сделать задание #3 по web-программированию");
	$('div#root').append('<input id = \"add_task_input\"  type = \"text\">');
	$('div#root').append('<button id = \"add_task\">Добавить</button>');
	
	$('#add_task').click( function() {
		add($('#add_task_input').val());
	});
	
});



