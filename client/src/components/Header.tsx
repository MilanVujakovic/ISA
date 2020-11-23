import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Header: React.FC<{ isAuthenticated:boolean }> = ({ isAuthenticated })  => {
    return (
        <StyledHeader>
            <StyledLogoText>Pharmacy</StyledLogoText>
            <StyledHeaderMenu>
                {
                    isAuthenticated
                    ? <StyledHeaderMenuItem link="/profile" outlined={ true }>Name</StyledHeaderMenuItem>
                    : <React.Fragment>
                        <StyledHeaderMenuItem link="/login" outlined={ true }>Log in</StyledHeaderMenuItem>
                        <StyledHeaderMenuItem link="/signup" outlined={ false }>Sign up</StyledHeaderMenuItem>
                    </React.Fragment>
                }
                
            </StyledHeaderMenu>
        </StyledHeader>
    )
}

const HeaderMenuItem: React.FC<{ link:string, className?:string }> = ({link, className, children}) => {
    return (
        <li className={ className }>
            <Link to={ link }>{ children }</Link>
        </li>
    );
}

const StyledHeader = styled.div `
    flex: 1;
    display: flex;
    padding: 3rem;

    color: #000;
    background-color: #fff;
`
const StyledLogoText = styled.h1`
    flex: 2;
    display: flex;
    justify-content: center;
    margin: 0;
    color: #006d77;
`
const StyledHeaderMenu = styled.ul`
    flex: 4;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const StyledHeaderMenuItem = styled(HeaderMenuItem)<{ outlined:boolean }>`
    color: #000;
    margin-left: 2rem;
    a{
        display: block;
        padding: 1rem 2rem;
        border: 1px solid #006d77;
        border-radius: 5%;

        color: ${ props => props.outlined ? "#006d77" : "#fff" };
        background-color: ${ props => props.outlined ? "#fff" : "#006d77" };
        font-weight: 400;
        :hover {
            color: #83c5be;
            border-color: ${ props => props.outlined && "#83c5be" };
        }
    }
`

export default Header