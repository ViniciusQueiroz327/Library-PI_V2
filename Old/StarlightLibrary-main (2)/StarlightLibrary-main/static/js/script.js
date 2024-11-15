document.addEventListener("DOMContentLoaded", function() {
    const formCadastro = document.getElementById("form-cadastro");
    formCadastro.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário imediatamente
        
        // Exibe o pop-up de sucesso
        Swal.fire({
            title: 'Sucesso!',
            text: 'Cadastro realizado com sucesso',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                formCadastro.submit(); // Envia o formulário após o usuário clicar em "OK"
            }
        });
    });

    const loginLink = document.getElementById("login-link");
    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "login";
    });
});
