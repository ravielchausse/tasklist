Template.novo.events({
	'submit form': function (event, template) {
		event.preventDefault();
		let input = $('#tarefa');
		Meteor.call('adiciona', {nome: input.val()});
		input.val('');
	}
});