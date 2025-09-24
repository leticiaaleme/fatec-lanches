// Alerta de item no carrinho
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const feedback = document.createElement('div');
      feedback.classList.add('alert', 'success');
      feedback.innerText = 'Item adicionado ao carrinho!';
      document.body.appendChild(feedback);

      setTimeout(() => {
        feedback.style.transform = 'translateY(0)';
        feedback.style.opacity = '1';
      }, 100);

      setTimeout(() => {
        feedback.style.transform = 'translateY(-20px)';
        feedback.style.opacity = '0';
        setTimeout(() => feedback.remove(), 300);
      }, 3000);
    });
  });
});
