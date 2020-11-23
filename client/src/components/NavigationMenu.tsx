import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NavigationMenu: React.FC<{ isAuthenticated:boolean }> = ({ isAuthenticated }) => {
    return (
        <NavMenuShadowStyled>
            <NavLeftMenuStyled>
                <NavMenuItemStyled link="/medicines">Medicines</NavMenuItemStyled>
                <NavMenuItemStyled link="/pharmacies">Pharmacies</NavMenuItemStyled>
                {
                    isAuthenticated 
                        &&  <React.Fragment>
                                <NavMenuItemStyled link="/schedule" className="">Schedule</NavMenuItemStyled>
                                <NavMenuItemStyled link="/e-prescriptions">ePrescriptions</NavMenuItemStyled>
                            </React.Fragment>   
                }
            </NavLeftMenuStyled>
            <NavRightMenuStyled>
            {
                    isAuthenticated 
                        &&  <React.Fragment>
                                <NavMenuItemStyled link="/your-history">Your history</NavMenuItemStyled>
                                <NavMenuItemStyled link="/complain">Complain</NavMenuItemStyled>
                            </React.Fragment>   
                }
            </NavRightMenuStyled>
            
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
    display: flex;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
    background-color: #006d77;
`

const NavLeftMenuStyled = styled.ul`
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const NavRightMenuStyled = styled(NavLeftMenuStyled)`
    flex: 1;
`

const NavMenuItemStyled = styled(NavMenuItem)`
    a{
        display: block;
        padding: 2rem;
        color: #f1faee;
        font-weight: 400;
        :hover {
            color: #83c5be;
        }
    }
`

export default NavigationMenu