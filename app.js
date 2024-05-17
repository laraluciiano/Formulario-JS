// app.js
document.addEventListener('DOMContentLoaded', () => {
    const consultaForm = document.getElementById('consultaForm');
  
    consultaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Su consulta ha sido enviada. Nos pondremos en contacto con usted pronto.');
    });
  });
  