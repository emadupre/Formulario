// Validación del formulario
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    
                    setTimeout(function () {
                        form.reset();
                        form.classList.remove('was-validated');
                    }, 1000); 
                }
                form.classList.add('was-validated')
            }, false)
        })
})()