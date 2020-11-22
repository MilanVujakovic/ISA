import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NavigationMenu = () => {
    return (
        <NavMenuShadowStyled>
            <NavMenu>
                <NavMenuItemStyled link="/medicines">Medicines</NavMenuItemStyled>
                <NavMenuItemStyled link="/pharmacies">Pharmacies</NavMenuItemStyled>
            </NavMenu>
        </NavMenuShadowStyled>
    )
}

const NavMenuItem: React.FC<{ link:string, className?:string }> = ({link, className, children}) => {
    return (
        <li className={ className }>
            <Link to={ link }>{ children }</Link>
        </li>
    );
}

const NavMenuShadowStyled = styled.div`
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
    background-color: #006d77;
`

const NavMenu = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 80%;
    margin: auto;
`

const NavMenuItemStyled = styled(NavMenuItem)`
    padding: 2rem;
    font-weight: 400;

    a{
        color: #f1faee;
        
        :hover {
            color: #83c5be;
        }
    }
`

export default NavigationMenu