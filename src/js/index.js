// for sticky navigation

window.onscroll = function() {

  var nav = document.getElementsByTagName("nav")[0];

  if (window.pageYOffset > 0) {

    nav.classList.add("sticky");

  } else {

    nav.classList.remove("sticky");

  }

};

