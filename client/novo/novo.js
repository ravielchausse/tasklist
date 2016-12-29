Template.novo.events({
	'submit form': function (event, template) {
		event.preventDefault();

		let input = $('#tarefa');
		let nome = input.val();

		Tarefas.insert({nome: nome, data: new Date()});
		input.val('');
	}
});