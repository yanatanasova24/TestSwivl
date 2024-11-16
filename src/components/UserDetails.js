import { UserDetails, UserInformation, Description, HeaderUserDetails, Followers, Name, Nickname, EditProfileButton, DotsMenu, UserDetailsContent } from "./styled/UserDetails.styled";
import { Avatar } from "./styled/Header.styled";
import { useState } from "react";

export default function UserDetailsComponent(){

    const [isOff, setIsOff] = useState(false);

    const change = () => {
        setIsOff(!isOff)
    }

    return(
        <UserDetails>
            <HeaderUserDetails>
                <Avatar src='./images/profile_img.png' alt="avatar">

                </Avatar>

                <UserInformation onClick={change}>
                    <Name>Benjamin Clementine</Name>
                    <Nickname>@benclementine</Nickname>
                    <EditProfileButton>Edit Profile</EditProfileButton>
                </UserInformation>

            <DotsMenu className={isOff ? 'off' : ''}>
                <a href="#"><img src='./images/icon_report.svg' alt="icon"/>Report User</a>
                <a href="#"><img src='./images/icon_delete.svg' alt="icon" className="icon_block"></img>Block User</a>
            </DotsMenu>

            </HeaderUserDetails>

                <UserDetailsContent>
                    <Followers>
                        <div><span>45</span>synths</div>
                        <div><span>110</span>followers</div>
                        <div><span>322</span>following</div>
                    </Followers>

                <Description>Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent each, according to CoinMarketCap. Here is the latest Ripple price news and live updates on XRP, bitcoin and Ethereum.</Description>
            </UserDetailsContent>
                
        </UserDetails>
    );
}