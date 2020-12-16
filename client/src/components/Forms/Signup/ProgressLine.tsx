import React from 'react';
import styled from 'styled-components';

const ProgressLine = (props: ProgressLineProps) => {
    return (
        <StyledProgressDiv>
            <ol>
                { props.children }
            </ol>
        </StyledProgressDiv>
    );
};

const CIRCLE_SIZE = '3rem';
const LINE_HEIGHT = '0.7rem';
const LI_WIDTH = '15vw';

const TRANSITION_DURATION = '0.5s';

const StyledProgressDiv = styled.div`
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 5rem;
    margin-top: 5rem;
    
    ol {
        counter-reset: step;
        list-style: none;
        padding: 0;
        
        li {
            position: relative;
            float: left;
            width: ${LI_WIDTH};
            list-style-type: none;
            text-align: center;

            span {
                color: ${ props => props.theme.colors.common.font };
                letter-spacing: 1px;
                transition: all ${TRANSITION_DURATION} linear;
            }

            &::before {
                counter-increment: step;
                content: counter(step);
                position: relative;
                display: block;
                border-radius: 50%;
                width: ${CIRCLE_SIZE};
                height: ${CIRCLE_SIZE};
                line-height: ${CIRCLE_SIZE};
                text-align: center;
                margin: 0 auto 1rem auto;

                background-color: ${ props => props.theme.colors.common.font };
                color: ${ props => props.theme.colors.secondary.contrastText };
                z-index: 1;
                transition: all ${TRANSITION_DURATION} linear;
            }

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: ${LINE_HEIGHT};
                top: 1.15rem;
                left: -50%;
                background: linear-gradient(to right, ${ props => props.theme.colors.secondary.main } 50%, ${ props => props.theme.colors.common.font } 50%);
                background-size: 200% 100%;
                background-position-x: right;
                z-index: 0;
                transition: all ${TRANSITION_DURATION} linear;
            }

            &:first-child::after {
                content: none;
            }
            &.advance {
                span {
                    color: ${ props => props.theme.colors.secondary.main };
                    
                }
                &::before {
                    background-color: ${ props => props.theme.colors.secondary.main };
                    color: ${ props => props.theme.colors.secondary.contrastText };
                    transition-delay: ${TRANSITION_DURATION};
                }
                &::after {
                    background-position-x: left;
                }
            }
            &.retreat {
                span {
                    color: ${ props => props.theme.colors.secondary.contrastText };
                    
                }
                &::before {
                    background-color: ${ props => props.theme.colors.secondary.main };
                    color: ${ props => props.theme.colors.secondary.contrastText };
                }
                &::after {
                    background-position-x: right;
                    transition-delay: ${TRANSITION_DURATION};
                }
            }
        }
    }
`

export const ProgressLineItem = (props:ProgressLineItemProps) => {
    const { title, advance, retreat } = props;
    return (
        <li className={`${ advance ? 'advance' : '' } ${ retreat && !advance ? 'retreat' : '' }`}>
            <span>{ title }</span>
        </li>
    );
};

interface ProgressLineProps {
    children: React.ReactNodeArray
}

interface ProgressLineItemProps {
    title: string
    advance?: boolean
    retreat?: boolean
}

export default ProgressLine;