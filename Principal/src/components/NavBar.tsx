export function NavBar() {

    document.getElementById('searchBox')?.addEventListener('click', () => {
        window.location.href = '/bookSearch';
    }) //MUDAR DEPOIS!!!!!!!!

    return (
        <>
        <div>
            <nav id="mainNav">
                <a href="/" id="home"><h1>STARLIGHT LIBRARY</h1></a>
                <div id="searchBoxWrapper">
                    <input id="searchBox" placeholder="Search"></input>
                </div>    
                <div id="divIcons">
                    <a href="/"><img className="iconsNavBar" src="./assets/images/icons/carrinho.svg" alt="Carrinho" /></a>
                    <a href="/"><img className="iconsNavBar" src="/assets/images/icons/notificacoes.svg" alt="Notificações" /></a>
                    <a href="/"><img className="iconsNavBar" src="/assets/images/icons/perfil.svg" alt="Perfil" /></a>
                </div>
            </nav>
            <nav id="secondaryNav">
                <ul id="generosNav">
                    <li id="dropdownTodos"><a href="#">! Todos</a></li>
                    <li><a href="#">Romance</a></li>
                    <li><a href="#">Terror</a></li>
                    <li><a href="#">Suspense</a></li>
                    <li><a href="#">Drama</a></li>
                    <li><a href="#">Fantasia</a></li>
                    <li><a href="#">Ficção Científca</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}