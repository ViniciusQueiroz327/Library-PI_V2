import { NavBar } from "../components/NavBar"

export function BookSearch() {
    return (
        <>
        <NavBar/>
            <img src="/assets/images/logo.png" alt="Starlight" id="logo2" />
            <div id="loginContainer">
                <div id="formLoginContainer">
                    <h1>Pesquisa de Livro</h1>
                    <form action="">
                        <input type="text" placeholder="Nome do livro"/>
                        <input type="text" placeholder="Autor"/>
                        <input type="text" placeholder="Editora"/>
                    </form>
                    <button><a href="/infosLivro">Pesquisar</a></button>
                </div>
            </div>
        </>
    )
}