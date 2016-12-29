Template.lista.helpers({

	tarefas : function() {
		return Tarefas.find({});
	},

	formataData: function () {
		return moment(this.data).format('DD/MM/YYYY HH:mm');
	}
});

Template.lista.events({
	'click button': function (event, template) {
		let tarefa = this;
		Tarefas.remove({_id: tarefa._id});
	}
});