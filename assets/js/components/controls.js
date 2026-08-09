(function () {
  const isEditableElement = (el) =>
    el instanceof HTMLElement &&
    (el.tagName === 'INPUT' ||
     el.tagName === 'TEXTAREA' ||
     el.isContentEditable);

  const routes = {
    m: 'main/index.html',
    g: 'goals-report/index.html',
    s: 'settings/index.html',
    e: 'export/index.html',
    h: 'index.html',
  };

  const path = window.location.pathname.replace(/\\/g, '/');
  const isGitHubPages = window.location.hostname.includes('github.io');

  function getProjectBase() {
    if (!isGitHubPages) return '';

    const parts = path.split('/').filter(Boolean);

    return parts.length > 0 ? `/${parts[0]}` : '/ctr-progress';
  }

  function getCurrentPage() {
    if (path.endsWith('/main/index.html') || path.endsWith('/main/')) return 'main';
    if (path.endsWith('/goals-report/index.html') || path.endsWith('/goals-report/')) return 'goals-report';
    if (path.endsWith('/settings/index.html') || path.endsWith('/settings/')) return 'settings';
    if (path.endsWith('/export/index.html') || path.endsWith('/export/')) return 'export';

    if (path.endsWith('/index.html') || /\/ctr-progress\/?$/.test(path)) {
      return 'home';
    }

    return 'unknown';
  }

  function buildRelativePath(target) {
    const current = getCurrentPage();
    const cleanTarget = target.replace(/^\/+/, '');
    const basePath = getProjectBase();

    if (
      (current === 'main' && cleanTarget === 'main/index.html') ||
      (current === 'goals-report' && cleanTarget === 'goals-report/index.html') ||
      (current === 'settings' && cleanTarget === 'settings/index.html') ||
      (current === 'export' && cleanTarget === 'export/index.html') ||
      (current === 'home' && cleanTarget === 'index.html')
    ) {
      return null;
    }

    if (isGitHubPages) {
      return `${basePath}/${cleanTarget}`;
    }

    if (current === 'main' || current === 'goals-report' || current === 'settings' || current === 'export') {
      if (cleanTarget === 'index.html') return '../index.html';
      return '../' + cleanTarget;
    }

    return './' + cleanTarget;
  }

  document.addEventListener('keydown', function (event) {
    const target = event.target;
    if (isEditableElement(target)) return;

    const key = event.key.toLowerCase();
    const route = routes[key];
    if (!route) return;

    const nextPath = buildRelativePath(route);
    if (!nextPath) return;

    window.location.href = nextPath;
  });
})();