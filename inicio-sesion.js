document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const contraseña = document.getElementById('contraseña').value;
        
        if (nombre && email && contraseña && apellido) {

            console.log('Registro exitoso:');
            console.log('Nombre:', nombre);
            console.log('Apellido',  apellido);
            console.log('Email:', email);
            console.log('Contraseña:', contraseña);
            
            form.reset();
            
            alert('¡Registro exitoso!');
            
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});