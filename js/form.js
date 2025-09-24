// Alerta de envio do formulário
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const feedback = document.createElement('div');
      feedback.classList.add('alert', 'success');
      feedback.innerText = 'Formulário enviado com sucesso!';
      document.body.appendChild(feedback);
      
      form.reset();
      
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
  }
});
