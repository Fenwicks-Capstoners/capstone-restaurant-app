var app = {
	settings: {
		container: $('.calendar'),
		calendar: $('.front'),
		days: $('.cal2endar__body'), //todo: span/div arg useful here?
		form: $('.back'),
		input: $('.back input'),
		buttons: $('.back button')

	},


	init: function() {
		instance = this;
		settings = this.settings;
		this.bindUIActions();
	},

	swap: function(currentSide, desiredSide) {
		settings.container.toggleClass('flip');

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();

	},

	bindUIActions: function() {
		settings.days.on('click', function(){
			// var i = $("#panel input");
			// console.log(i);
			instance.swap(settings.calendar, settings.form);
			settings.input.focus();
			// console.log(settings.days);
		});

		settings.buttons.on('click', function(){
			// console.log();
			instance.swap(settings.form, settings.calendar);

		});
	}
}

app.init();