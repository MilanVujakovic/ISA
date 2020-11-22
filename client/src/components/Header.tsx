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

    color: #000;
    background-color: #fff;
`

export default Header