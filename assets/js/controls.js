(function () {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'm' || event.key === 'M') {
      window.location.href = '/main';
    } else if (event.key === 'g' || event.key === 'G') {
      window.location.href = '/goals-report';
    } else if (event.key === 's' || event.key === 'S') {
      window.location.href = '/settings';
    } else if (event.key === 'h' || event.key === 'H') {
      window.location.href = '/';
    }
  });
})();