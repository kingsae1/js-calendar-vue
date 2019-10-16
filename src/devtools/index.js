window.chrome.devtools.panels.create('panel', 'img/logo.png', 'pages/panel.html', function(panel) {
  /* eslint-disable no-console */
  console.log('hello from callback', panel)
})
