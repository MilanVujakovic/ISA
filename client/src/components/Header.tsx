import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return (
        <HeaderDiv>
            Header
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div `
    flex: 1;
    margin: 0;
    padding: 3rem;

    color: #fff;
    background-color: #000;
`

export default Header