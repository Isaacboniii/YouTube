import { Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
} from "./styles";

import HamburguerIcon from "../../assets/hamburger_.png";
import Logo from "../../assets/YouTube-Logo_.png";
import SearchIcon from "../../assets/search_.png";
import MicIcon from "../../assets/microfone-gravador_.png";
import VideoIcon from "../../assets/video_.png";
import NotificationIconfrom from "../../assets/sino.png";

function Header(){
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer margin="0 10px 0 0">
                    <ButtonIcon alt=""  src={HamburguerIcon} />
                </ButtonContainer>
                <img
                    style={{ cursor: "pointer", width: "100px" }}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>
            <HeaderButton>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={NotificationIconfrom}/>
                </ButtonContainer>
                <ButtonContainer margin="0 0 0 10px">
                    I
                </ButtonContainer>
            </HeaderButton>
        </Container>
    )
}

export default Header;