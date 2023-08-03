
const picker = new easepick.create({
  element: document.getElementById('date'),
  format: 'DD/MM/YYYY',
  zIndex: '999',
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
  ],
});

const picker2 = new easepick.create({
    element: document.getElementById('date2'),
    format: 'DD/MM/YYYY',
    zIndex: '999',
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
    ],
  });
