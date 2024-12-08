
function changeLanguage(lang) {
    const currentUrl = window.location.href.split('?')[0];
    window.location.href = `${currentUrl}?lang=${lang}`;
  }
