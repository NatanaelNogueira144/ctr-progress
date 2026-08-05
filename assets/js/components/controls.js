(function () {
  const current = window.location.pathname.replace(/\\/g, '/');

  function getBasePath() {
    if (window.location.protocol === 'file:') {
      const marker = '/ctr-progress/';
      const idx = current.lastIndexOf(marker);
      if (idx !== -1) return current.slice(0, idx + marker.length);
      return current.slice(0, current.lastIndexOf('/') + 1);
    }

    if (location.hostname === 'natanaelnogueira144.github.io') {
      return '/ctr-progress/';
    }

    return '/';
  }

  const BASE_PATH = getBasePath();

  const routes = {
    m: 'main/index.html',
    g: 'goals-report/index.html',
    s: 'settings/index.html',
    h: 'index.html',
  };

  function toUrl(path) {
    return new URL(path, location.origin + BASE_PATH).href;
  }

  function isSamePage(targetPath) {
    const normalizedCurrent = current.replace(/\/+$/, '');
    const normalizedTarget = new URL(targetPath, location.origin + BASE_PATH).pathname.replace(/\\/g, '/').replace(/\/+$/, '');
    return normalizedCurrent === normalizedTarget;
  }

  document.addEventListener('keydown', function (event) {
    const target = event.target;
    const isEditable =
      target instanceof HTMLElement &&
      (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

    if (isEditable) return;

    const key = event.key.toLowerCase();
    const route = routes[key];
    if (!route) return;

    const url = toUrl(route);
    if (isSamePage(route)) return;

    window.location.href = url;
  });
})();