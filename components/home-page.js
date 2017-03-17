AFRAME.registerComponent('home-page', {
  schema: {
    on: {type: 'string', default: 'on'},
    off: {type: 'string', default: 'off'}
  },
  init: function () {
    var self = this;
    this.status = 'on';
    var data = this.data;
    var el = this.el;
    var line1 = document.querySelector('#line1');
    var line2 = document.querySelector('#line2');
    var line3 = document.querySelector('#line3');
    var sky = document.querySelector('#sky');
    el.addEventListener(data.on, function(){
      if (self.status !== 'off')
        return;
      console.log('on');
      sky.setAttribute("visible", true);
      el.appendChild(line1);
      el.appendChild(line2);
      el.appendChild(line3);
      el.setAttribute('visible', true);
      self.status = 'on';
    });
    el.addEventListener(data.off, function(){
      if (self.status !== 'on')
        return;
      console.log('off');
      sky.setAttribute("visible", false);
      el.removeChild(line1);
      el.removeChild(line2);
      el.removeChild(line3);
      el.setAttribute('visible', false);
      self.status = 'off';
    });

    function backToHome() {
      var controls = document.querySelector('#controls');
        controls.setAttribute("visible", false);
        document.getElementById('video').src = '';
        setTimeout(function() {
          el.emit('on');
        }, 500);
    }

    document.onkeypress = function(event) {
      if (event.key === 'Backspace') {
        backToHome();
      }
    }
  } 
});
