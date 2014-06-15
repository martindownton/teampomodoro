if (Meteor.isClient) {
	Modal = new Meteor.Collection("modal");

	Modal.init = function() {
		Modal.el = $('.modal');
		Modal.content = Modal.el.find('.content');
		Modal.title = Modal.el.find('.title');

		$('.modal').click(function() {
			if ($(event.target).closest('div').is(this)) {
				Modal.hide();
			}
		});
	}
	Modal.show = function(title) {
		Modal.el.addClass('show');
		$('body').addClass('lb');
		Modal.title.html(title);
	}
	Modal.hide = function() {
		Modal.el.removeClass('show');
		$('body').removeClass('lb');
		Modal.content.html('');
	}	
}