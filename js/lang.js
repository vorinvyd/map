    var arrLang = {
      'en': {
        'about': 'About Me'
      },
      'ru': {
        'about': 'Обо мне'
      }
    };

    // Process translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });