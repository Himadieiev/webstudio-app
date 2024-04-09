document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button-filter');
  const items = document.querySelectorAll('.portfolio__item');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || category === itemCategory) {
          item.classList.add('show');
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
          item.classList.remove('show');
        }
      });
    });
  });
});
