var Sc;

Sc = {
  resize: function() {},
  scroll: function() {},
  init: function() {
    Sc.Win = jQuery(window);
    //counter
    jQuery('._counter ._counter__plus:not(.inited)').addClass('inited').click(function() {
      var i, n, p, s, sv, t;
      t = jQuery(this);
      p = t.closest('._counter');
      s = p.find('._counter__count');
      sv = s.text();
      i = p.find('._counter__val');
      n = sv;
      n++;
      i.val(n);
      s.text(n);
      return p.find('._counter__minus').removeClass('disabled to-hide');
    });
    jQuery('._counter ._counter__minus:not(.inited)').addClass('inited').click(function() {
      var i, n, p, s, sv, t;
      t = jQuery(this);
      p = t.closest('._counter');
      s = p.find('._counter__count');
      sv = s.text();
      i = p.find('._counter__val');
      n = sv;
      //n--
      if (p.hasClass('_counter__no-null')) {
        /*if n != 0 and n > 0
        if n == 1
          return false
        else
          n--
          i.val(n)
          s.text(n)*/
        if (n !== 1 && n > 1) {
          n--;
          i.val(n);
          return s.text(n);
        } else {
          return t.addClass('to-hide');
        }
      } else {
        if (n > 0 || n === 0) {
          i.val(n);
          return s.text(n);
        }
      }
    });
    
    //catalog favorite
    jQuery('._catalog__fave').click(function() {
      var t;
      t = jQuery(this);
      if (t.hasClass('active')) {
        return t.removeClass('active');
      } else {
        return t.addClass('active');
      }
    });
    //catalob buy ond counter func
    jQuery('._buy__btn').click(function() {
      var h, o, p, t;
      t = jQuery(this);
      p = t.closest('._buy__parent');
      o = p.find('._buy__obj');
      h = p.find('._buy__hide');
      t.addClass('none');
      o.removeClass('none');
      return h.click(function() {
        var c;
        if (h.hasClass('to-hide')) {
          c = p.find('._counter__val').val();
          console.log(c);
          if (c === '1') {
            t.removeClass('none');
            return o.addClass('none');
          }
        }
      });
    });
    Sc.scroll();
    Sc.Win.scroll(function() {
      return Sc.scroll();
    });
    Sc.scroll();
    //jQuery("input[name=custom_phone]").mask("+7 (999) 999-99-99");
    Sc.Win.resize(function() {
      return Sc.resize();
    });
    return Sc.resize();
  }
};

jQuery(window).ready(function() {
  return Sc.init();
});

jQuery(window).scroll(function() {
  return Sc.scroll();
});
