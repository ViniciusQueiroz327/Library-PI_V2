import { Link } from "react-router-dom"
import { MainNav,
         SearchBoxWrapper, 
         SearchBox, 
         DivIcons,
         SecondaryNav,
         GenerosNav,
         HomeWrapper } from "./style"

const Header = () => {
    return (<>
        <MainNav>
            <HomeWrapper>
                <Link to="/" draggable="false">
                    <img id="logo"src="./assets/logo.png" alt="Logo Plenna" draggable="false"/>
                </Link>
                <a href="/" draggable="false"><h1>PLENNA</h1></a>
            </HomeWrapper>
            <SearchBoxWrapper>
                <SearchBox placeholder="Search"></SearchBox>
            </SearchBoxWrapper>
            <DivIcons>
                <a href="/"><img className="iconsNavBar" src="./assets/icons/carrinho.svg" alt="Carrinho" draggable="false"/></a>
                <a href="/"><img className="iconsNavBar" src="/assets/icons/notificacoes.svg" alt="Notificações" draggable="false"/></a>
                <a href="/login"><img className="iconsNavBar" src="/assets/icons/perfil.svg" alt="Perfil" draggable="false"/></a>
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