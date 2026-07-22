(function () {
  const BASE_PATH =
    window.location.hostname.includes('github.io')
      ? '/ctr-progress'
      : '';

  function withBasePath(path) {
    if (path === '/') {
      return BASE_PATH ? `${BASE_PATH}/` : '/';
    }

    return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
  }

  const routes = {
    m: withBasePath('/main'),
    g: withBasePath('/goals-report'),
    s: withBasePath('/settings'),
    h: withBasePath('/'),
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