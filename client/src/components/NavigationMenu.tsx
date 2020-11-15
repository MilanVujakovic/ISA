import React from 'react';
import styled from 'styled-components';

export const NavigationMenu = () => {
    return (
        <NavMenu>
            Navigation menu
        </NavMenu>
    )
}

const NavMenu = styled.div`
    flex: 1;
    margin: 0;
    padding: 2rem;

    color: #fff;
    background-color: green;
`

export default NavigationMenu