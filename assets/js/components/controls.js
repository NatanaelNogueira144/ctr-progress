(function () {
  const routes = {
    m: '/main',
    g: '/goals-report',
    s: '/settings',
    h: '/',
  };

  document.addEventListener('keydown', function (event) {
    const target = event.target;
    const isEditable =
      target instanceof HTMLElement &&
      (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      );

    if (isEditable) return;

    const key = event.key.toLowerCase();
    const route = routes[key];

    if (!route) return;

    window.location.assign(route);
  });
})();