import React from 'react';
import Header from '../components/Header';
import NavigationMenu from '../components/NavigationMenu';
import styled from 'styled-components';

const Home = () => {
    return (
        <HomeDiv>
            <Header isAuthenticated={ false } />
            <NavigationMenu isAuthenticated={ true } />
        </HomeDiv>
    )
}

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export default Home

