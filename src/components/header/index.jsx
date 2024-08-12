import { Container } from "./style";
import logoImage from '../../assets/logo.png';


export const Header = () => {
    return (
        <Container>
            <img src={logoImage} />

            <nav>
                <a href="#movies"> Filmes</a>
                <a href="#tvShows"> Séries </a>
            </nav>
        </Container>
    );
};
