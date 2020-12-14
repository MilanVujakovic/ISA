import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NavigationMenu: React.FC<{ isAuthenticated:boolean }> = ({ isAuthenticated }) => {
    return (
        <StyledNavMenuShadow>
            <StyledNavMenu flex="2">
                <StyledNavMenuItem link="/medicines">Medicines</StyledNavMenuItem>
                <StyledNavMenuItem link="/pharmacies">Pharmacies</StyledNavMenuItem>
                {
                    isAuthenticated 
                        &&  <React.Fragment>
                                <StyledNavMenuItem link="/schedule" className="">Schedule</StyledNavMenuItem>
                                <StyledNavMenuItem link="/e-prescriptions">ePrescriptions</StyledNavMenuItem>
                            </React.Fragment>   
                }
            </StyledNavMenu>
            <StyledNavMenu flex="1">
            {
                    isAuthenticated 
                        &&  <React.Fragment>
                                <StyledNavMenuItem link="/your-history">Your history</StyledNavMenuItem>
                                <StyledNavMenuItem link="/complain">Complain</StyledNavMenuItem>
                            </React.Fragment>   
                }
            </StyledNavMenu>
        </StyledNavMenuShadow>
    )
}

const NavMenuItem: React.FC<{ link:string, className?:string }> = ({link, className, children}) => {
    return (
        <li className={ className }>
            <Link to={ link }>{ children }</Link>
        </li>
    );
}

const StyledNavMenuShadow = styled.div`
    display: flex;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
    background-color: ${ props => props.theme.colors.primary.main };
`

const StyledNavMenu = styled.ul<{ flex:string }>`
    flex: ${ props => props.flex };
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const StyledNavMenuItem = styled(NavMenuItem)`
    a{
        display: block;
        padding: 2rem;
        color: #f1faee;
        font-weight: 400;
        :hover {
            color: ${ props => props.theme.colors.primary.light };
        }
    }
`

export default NavigationMenu