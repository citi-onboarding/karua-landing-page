import React from "react";
import { HomeContainer } from './styles';
import { Footer, NavBar, Introd, CarouselPage, SubscriptionComponent} from "../../components";


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <NavBar></NavBar>
            <Introd></Introd>
            <CarouselPage/>
            <SubscriptionComponent />
            <Footer />
        </HomeContainer>
    )
}
