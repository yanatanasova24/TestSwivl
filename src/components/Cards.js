import { PrivacySwitcher, CardsGrid, TumblerWrap, UserInCard, AvatarPlaceholder, CardsWrap, CardItem, CardShared, CardFooter, ShareLink, UserInCardStats, StatsIcon } from "./styled/Cards.styled";
import { useState } from "react";

export default function Cards(){

const [isOff, setIsOff] = useState(false);

  const change = () => {
    setIsOff(!isOff)
  }

    return(
        <CardsWrap>
            <PrivacySwitcher>
                <span>Public</span>
                <TumblerWrap className={isOff ? 'off' : ''} onClick={change} >
                    <div className="Tumbler">
                    </div>
                </TumblerWrap>
                <span>Private</span>
            </PrivacySwitcher>


            <CardsGrid>
                <CardItem>
                    <p>New air routes that promise cheap flights in</p>

                    <CardFooter>
                        <UserInCard>
                            <AvatarPlaceholder/>
                            <p>Gregory Watkins</p>
                        </UserInCard>

                        <ShareLink>Share</ShareLink>
                    </CardFooter>
                </CardItem>

                <CardItem>
                    <p>New air routes that promise cheap flights in</p>

                    <CardFooter>
                        <UserInCard>
                            <AvatarPlaceholder/>
                            <p>Gregory Watkins</p>
                        </UserInCard>

                        <ShareLink>Share</ShareLink>
                    </CardFooter>
                </CardItem>

                <CardItem>
                    <CardShared>
                        <p>Shared to <span>#discussionaboutanimgttdds</span></p>
                    </CardShared>

                        <p>New air routes that promise cheap flights in</p>

                    <CardFooter>
            
                        <UserInCard>
                            <AvatarPlaceholder/>
                            <p>Gregory Watkins</p>
                        </UserInCard>

                        <UserInCardStats>
                            <StatsIcon>
                                <img src='./images/icon_view.svg' alt="icon"/>
                                <span>88</span>
                            </StatsIcon>

                            <StatsIcon>
                                <img src='./images/icon_like.png' alt="icon"/>
                                <span>24</span>
                            </StatsIcon>
                            
                        </UserInCardStats>

                    </CardFooter>
                </CardItem>

                <CardItem>

                    <CardShared>
                        <p><img src='./images/icon_link.svg' alt="icon"/>Shared via weblink</p>
                    </CardShared>

                    <p>New air routes that promise cheap flights in</p>
                    
                <CardFooter>

                        <UserInCard>
                            <AvatarPlaceholder/>
                            <p>Gregory Watkins</p>
                        </UserInCard>

                    <UserInCardStats>
                            <StatsIcon>
                                <img src='./images/icon_view.svg' alt="icon"/>
                                <span>88</span>
                            </StatsIcon>

                            <StatsIcon>
                                <img src='./images/icon_like.png' alt="icon"/>
                                <span>24</span>
                            </StatsIcon>
                            
                        </UserInCardStats>

                </CardFooter>
                </CardItem>
                
            </CardsGrid>

        </CardsWrap>
    );
}