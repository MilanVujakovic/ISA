import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
};

const StyledHeader = styled.div `
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
        border: 1px solid ${ props => props.outlined ? props.theme.colors.primary.main : props.theme.colors.secondary.main };
        border-radius: ${ props => props.theme.borderRadius };

        color: ${ props => props.outlined ? props.theme.colors.primary.main : props.theme.colors.secondary.contrastText };
        background-color: ${ props => props.outlined ? "inherit" : props.theme.colors.secondary.main };
        font-weight: 400;
        :hover {
            border-color: ${ props => props.outlined ? props.theme.colors.primary.light : props.theme.colors.secondary.light };
            color: ${ props => props.outlined && props.theme.colors.primary.light };
            background-color: ${ props => !props.outlined && props.theme.colors.secondary.light }
        }
    }
`

export default Header