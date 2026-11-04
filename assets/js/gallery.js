// Gallery lightbox (PhotoSwipe 5, MIT licence, vendored in assets/vendor/photoswipe).
import PhotoSwipeLightbox from '{{ .lightbox }}';

const lightbox = new PhotoSwipeLightbox({
  gallery: '[data-gallery]',
  children: 'a.gallery__item',
  pswpModule: () => import('{{ .core }}'),
  bgOpacity: 0.92,
  showHideAnimationType: 'fade',
  closeTitle: '{{ .close }}',
  zoomTitle: '{{ .zoom }}',
  arrowPrevTitle: '{{ .prev }}',
  arrowNextTitle: '{{ .next }}',
  errorMsg: '{{ .error }}',
});

// Caption + photographer credit at the bottom of the lightbox
lightbox.on('uiRegister', () => {
  lightbox.pswp.ui.registerElement({
    name: 'caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: '',
    onInit: (el, pswp) => {
      el.classList.add('pswp__custom-caption');
      pswp.on('change', () => {
        const src = pswp.currSlide.data.element;
        const cap = src && src.querySelector('.gallery__caption');
        el.innerHTML = cap ? cap.innerHTML : '';
        el.hidden = !cap;
      });
    },
  });
});

lightbox.init();
