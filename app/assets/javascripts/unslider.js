var ready = function() {
    $('.banner').unslider({
			autoplay: true,
      infinite: true,
      arrows: true
		});
};

$(document).ready(ready);
$(document).on('page:change', ready);