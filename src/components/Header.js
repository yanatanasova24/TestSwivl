import { StyledHeader, Nav, Logo, Avatar, ActionButton, User } from "./styled/Header.styled"
import { MainContainer } from "./styled/MainContainer.styled"

export default function Header(){
    return(
        <StyledHeader>
        <MainContainer>

            <div className="Menu">
                <Logo src='./images/Synth_logo.png'/>
                <Nav>
                    <a href="#" className="active">Feed</a>
                    <a href="#">Explore</a>
                    <a href="#">Discussions</a>
                </Nav>
            </div>

            <div className="ProfileSection">
                <User>
                    <span>Arthur Wood</span>
                    <Avatar src='./images/avatar.png'/>
                </User>

                <div className="icons">
                    <img src="./images/notifications.svg" alt="icon"/>
                    <img src="./images/share recap.svg" alt="icon"/>
                    <img src="./images/medium.svg" alt="icon"/>
                </div>
            </div>

            <ActionButton><img src='./images/icon-plus.png' alt="icon"/></ActionButton>
            </MainContainer>
        </StyledHeader>
    )
}