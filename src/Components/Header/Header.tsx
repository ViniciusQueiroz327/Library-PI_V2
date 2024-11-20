import { MainNav,
         SearchBoxWrapper, 
         SearchBox, 
         DivIcons,
         SecondaryNav,
         GenerosNav } from "./style"

const Header = () => {
    return (<>
        <MainNav>
            <img id="logo"src="./assets/logo.png" alt="Logo Plenna" />
            <a href="/" id="home"><h1>PLENNA</h1></a>
            <SearchBoxWrapper>
                <SearchBox placeholder="Search"></SearchBox>
            </SearchBoxWrapper>
            <DivIcons>
                <a href="/"><img className="iconsNavBar" src="./assets/icons/carrinho.svg" alt="Carrinho" draggable="false"/></a>
                <a href="/"><img className="iconsNavBar" src="/assets/icons/notificacoes.svg" alt="Notificações" draggable="false"/></a>
                <a href="/"><img className="iconsNavBar" src="/assets/icons/perfil.svg" alt="Perfil" draggable="false"/></a>
            </DivIcons>
        </MainNav>
        <SecondaryNav>
            <GenerosNav>
                <li id="dropdownTodos"><a href="#">Todos</a></li>
                <li><a href="#">Romance</a></li>
                <li><a href="#">Terror</a></li>
                <li><a href="#">Suspense</a></li>
                <li><a href="#">Drama</a></li>
                <li><a href="#">Fantasia</a></li>
                <li><a href="#">Ficção Científca</a></li>
            </GenerosNav>
        </SecondaryNav>
    </>)
}

export { Header }