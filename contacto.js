document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form1").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('fnombre').value;
    if(nombre.length == 0) {
      alert('Debes completar el nombre');
      return;
    }
    var apellido = document.getElementById('fapellido').value;
    if(apellido.length == 0) {
      alert('Debes completar el apellido');
      return;
    }
    var telefono = document.getElementById('ftelefono').value;
    if(telefono.length == 0) {
      alert('Debes completar el telefono');
      return;
    }
    var email = document.getElementById('femail').value;
    if(email.length == 0) {
      alert('Debes completar el e-mail');
      return;
    }
    
    //this.submit();
    alert('Formulario enviado. Muchas gracias por su contacto!!');
  }