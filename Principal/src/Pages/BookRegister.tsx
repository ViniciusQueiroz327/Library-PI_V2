import { NavBar } from "../components/NavBar"

export function BookRegister() {
    return (
        <>
        <NavBar/>
            <img src="/assets/images/logo.png" alt="Starlight" id="logo2" />
            <div id="loginContainer">
                <div id="formLoginContainer">
                    <h1>Cadastro de Livros</h1>
                    <form action="">
                        <input type="text" placeholder="Nome do livro"/>
                        <input type="text" placeholder="Autor"/>
                        <input type="text" placeholder="Editora"/>
                    </form>
                    <button><a href="#">Doar</a></button>
                </div>
            </div>
        </>
    )
}