Meteor.methods({
	adiciona: function (attr) {
		Tarefas.insert({ nome: attr.nome, data: new Date(), usuario: this.userId });
	},

	remove: function (id) {
		Tarefas.remove({ _id: id, usuario: this.userId });
	}
});