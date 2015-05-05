//= require jquery.min
//= require bootstrap/modal
//= require typed

// Typing terminal animation
$(window).load(function() {
  $(".open-modal").click(function() {
    $("#modal").modal("show");
  });

  var data    = [
    {
      action: 'type',
      strings: ['Dear Amber,^400'],
      output: '&nbsp;',
      postDelay: 1000
    },
    {
      action: 'type',
      strings: ['I love you more then I can describe within the limits of this tiny little story.^400'],
      output: '&nbsp;',
      postDelay: 1000
    },
    {
      action: 'type',
      strings: ['We\'ve been together for 2 years now, and I\'ve known for most of that time that I wanted to spend my life with you.^400'],
      output: '&nbsp;',
      postDelay: 1000
    },
    {
      action: 'type',
      strings: ['Enough rambling. Will you marry me?^400'],
      output: "<span class=\"gray\">" +
              "  oo                                        \n" +
              "     oo     OOOOOOOO:       OOOOOOOO!       \n" +
              "        oOOOO!!!!;;;;O    OO.......:;!O     \n" +
              "       oOOO!!!;;;;;;;;O  O.......:   ;!O    \n" +
              "       OOO!!!!;;::::::.OO........:    ;!O   \n" +
              "       OO!!!!;;:::::..............:   ;!O   \n" +
              "       OOO!!!;::::::..............:   ;!O   \n" +
              "        OO!!;;::::::.............:   ;!O    \n" +
              "         OO!;;::::::......oo.....::::!O     \n" +
              "           O!!;::::::........oo..:::O       \n" +
              "             !!!;:::::..........ooO         \n" +
              "                !!;:::::.......O   oo       \n" +
              "                  ;;::::.....O        oo  ,o\n" +
              "                     :::..O              ooo\n" +
              "                       ::.              oooo\n" +
              "                        :                   \n" +
              "</span>",
      postDelay: 2000
    },
    {
      action: 'type',
      strings: [
        'Please say YES!',
        ''
      ],
      postDelay: 3000
    },
    {
      action: 'type',
      strings: [
        'Please say YES!!!',
        ''
      ],
      postDelay: 5000
    },
    {
      action: 'type',
      strings: [
        'PLEASE!!!',
        ''
      ],
      postDelay: 5000
    }
  ];
  runScripts(data, 0);
});

function runScripts(data, pos) {
  var prompt = $('.prompt'), script = data[pos];
  if (script.clear === true) {
    $('.history').html('');
  }
  switch (script.action) {
    case 'type':
      prompt.removeData();
      $('.typed-cursor').text('');
      prompt.typed({
        strings: script.strings,
        typeSpeed: 30,
        callback: function () {
          var history = $('.history').html();
          history = history ? [history] : [];
          history.push('$ ' + prompt.text());
          if (script.output) {
            history.push(script.output);
            prompt.html('');
            $('.history').html(history.join('<br>'));
          }
          $('section.terminal').scrollTop($('section.terminal').height());
          pos++;
          if (pos < data.length) {
            setTimeout(function () {
              runScripts(data, pos);
            }, script.postDelay || 1000);
          }
        }
      });
      break;
    case 'view':
      break;
  }
}
