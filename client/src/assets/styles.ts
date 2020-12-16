import styled from 'styled-components';

interface Tab {
    height: string
}

export const StyledTab = styled.div`
    display: flex;
    flex-direction: column;
    height: ${ (props: Tab) => props.height };
    box-shadow: 0 0.1rem 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: ${ props => props.theme.borderRadius };
    background-color: #fff;
    overflow: hidden;
`

export const StyledFormFooter = styled.div`
    min-height: 5rem;
    text-align: center;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
        color: ${ props => props.theme.colors.secondary.main };
        :hover {
            color: ${ props => props.theme.colors.secondary.light };
        }
    }
`

export const StyledButton = styled.button`
    flex: 1.5;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    color: ${ props => props.theme.colors.secondary.contrastText };
    background-color: ${ props => props.theme.colors.secondary.main };

    :hover {
        background-color: ${ props => props.theme.colors.secondary.light };
    }
`