(function () {
  var subNav = document.getElementById('subnav');
  var accordian = document.getElementsByClassName('collapsible');

  // Navigation
  subNav.addEventListener('mouseover', function() {
    subNav.childNodes[3].classList.value = 'nav';
  });
  subNav.addEventListener('mouseout', function() {
    subNav.childNodes[3].classList.value = 'nav hidden';
  });

  // Accordian
  for (var i=0; i<accordian.length; i++) {
    var link = document.createElement('a');
    var text = document.createTextNode('remove');

    link.setAttribute('class', 'remove');
    link.setAttribute('href', 'javascript:void(0)');
    link.appendChild(text);

    link.addEventListener('click', function() {
      var active = this.parentNode.parentNode;
      var prev = active.previousElementSibling;
      var next = active.nextElementSibling;

      active.remove();

      if (next) {
        next.click();
      } else if (prev) {
        prev.click();
      }
    });

    accordian[i].childNodes[3].appendChild(link);

    accordian[i].addEventListener('click', function() {
      if (!(this.classList.value === 'collapsible open')) {
        for (var i=0; i<accordian.length; i++) {
          accordian[i].className = 'collapsible';
        }
        this.classList.value = 'collapsible open';
      }
    });
  }
}());
