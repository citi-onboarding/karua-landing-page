import React from "react";
import { HomeContainer } from './styles';
import { Footer, Carousel, NavBar, SubscriptionComponent} from "../../components";



export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <NavBar></NavBar>
            <Carousel />
            <SubscriptionComponent />
            <Footer />
        </HomeContainer>
    );
}