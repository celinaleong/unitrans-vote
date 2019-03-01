M.AutoInit();

$('.nav-pushpin').each(function () {
    var $this = $(this);
    $this.pushpin({
        top: $this.offset().top,
    });
});

(function($) {
    function mScrollTop(element, settings) {

        var _ = this,
            breakpoint;
        var scrollTo = 0;

        _.btnClass = '.vote-button-bottom';
        _.revealClass = 'reveal';
        _.btnElement = $(_.btnClass);

        _.initial = {
            revealElement: 'body',
            revealPosition: 'top',
            padding: 0,
            duration: 600,
            easing: 'swing',
            onScrollEnd: false
        }

        _.options = $.extend({}, _.initial, settings);

        _.revealElement = $(_.options.revealElement);
        breakpoint = _.options.revealPosition !== 'bottom' ? _.revealElement.offset().top : _.revealElement.offset().top + _.revealElement.height();
        scrollTo = element.offsetTop + _.options.padding;

        $(document).scroll(function() {
            if (breakpoint + 910 < $(document).scrollTop()) {
                _.btnElement.addClass(_.revealClass);
            } else {
                _.btnElement.removeClass(_.revealClass);
            }
        });

    }

    $.fn.materialScrollTop = function() {
        var _ = this,
            opt = arguments[0],
            l = _.length,
            i = 0;
        if (typeof opt == 'object' || typeof opt == 'undefined') {
            _[i].materialScrollTop = new mScrollTop(_[i], opt);
        }
        return _;
    };
}(jQuery));

window.onscroll = function() {progressBar()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

document.querySelectorAll('.vote-img').onclick = () => {
    window.location.href = "https://elections.ucdavis.edu/";
}