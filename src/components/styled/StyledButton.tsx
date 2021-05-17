import styled, {keyframes, css} from 'styled-components';
import {PRIMARY, SECONDARY, DANGER, SM, MD, LG, TEXT, OUTLINE} from '../../constans';

interface PropTypes{
    color?: string;
    variant?: string;
    size?: string;
    shadow?: boolean;
    disabled?: boolean;
    hoverAnimation?: boolean;
}

const StyledButton = styled.button<PropTypes>`
    --hover-animation-time: 5s;
    --transition-time: 0.6s;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5em 1.5em;
    width: fit-content;

    color: ${props => {
        if(props.variant){
            if(props.color){
                return `var(--color-${props.color})`;
            }

            return "#444"
        }

        return "#fff"
    }};

    cursor: ${props => !props.disabled && "pointer"};
    transition: all var(--transition-time) ease;

    font-size: ${props => {
        if(props.size === SM) return "0.75rem" 
        if(props.size === MD) return "1rem" 
        if(props.size === LG) return "1.25rem" 
        return "1rem"
    }};


    background: ${props => {
        if(props.variant === TEXT || props.variant === OUTLINE) return "transparent"

        if(props.color === PRIMARY) return "var(--color-primary)" 
        if(props.color === SECONDARY) return "var(--color-secondary)" 
        if(props.color === DANGER) return "var(--color-danger)" 
        return "var(--color-default)"
    }};

    border: ${props => {
        if(props.variant){
            if(props.variant === OUTLINE){
                if(props.color) return `2px solid var(--color-${props.color})`;
                return `2px solid var(--color-default)`;
            }
        }

        return "2px solid transparent"
    }};
    
    border-radius: 4px;

    filter: ${props => props.disabled && "brightness(0.5)"};
    
    box-shadow: ${props => props.shadow && "1px 2px 5px rgba(0, 0, 0, 0.45)"};

    animation: ${props => (
        props.hoverAnimation && css`${variantColorChange(props)} var(--hover-animation-time) ease infinite`
    )};


    svg{
        font-size: inherit;
    }
    &>:last-child{
        margin-left: 0.5em;
    }

    &:hover, &:focus{
        &::after{
            opacity: ${props => {
                if(props.disabled || props.variant || props.hoverAnimation) return
                return "1"
            }};
        }

        color: ${props => {
            if(props.variant && !props.hoverAnimation) return "#fff"
        }};

        background: ${props => {
            if(props.variant && !props.hoverAnimation){ 
                if (props.color) return `var(--color-${props.color})`;
                return `var(--color-default)`;
            }
        }};
    }

    &::before{
        content: ${props => props.hoverAnimation && `""`};
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 20px;

        box-sizing: border-box;
        transform: translate(150%, 80%);

        animation: ${props => (
            props.hoverAnimation && css`${cursorMove} var(--hover-animation-time) ease infinite`
        )};

        z-index: 5;
        background: #fff;
        border: 5px solid var(--color-primary);
        border-radius: 50%;
        box-shadow: 2px 2px 3px #00000099;
    }

    &::after {
        content: "";

        position: absolute;
        top: -2px;
        left: -2px;

        display: block;
        height: calc(100% + 4px);
        width: calc(100% + 4px);

        opacity: 0;
        background: rgba(0,0,0,.5);
        border-radius: inherit;

        animation: ${props => (
            props.hoverAnimation && css`${fadeIn(props)} var(--hover-animation-time) ease infinite`
        )};
        transition: all var(--transition-time) ease;
    }
`;


const cursorMove = () => keyframes`
    50%{
        transform: translate(0,0);
    }
`;

const fadeIn = (props:PropTypes) => keyframes`
    11%{
        opacity: 0;
    }
    31%{
        opacity: ${(() => {
                if(props.disabled || props.variant) return
                return "1"
            })()};
    }
    68%{
        opacity: ${(() => {
                if(props.disabled || props.variant) return
                return "1"
            })()};
    }
    88%{
        opacity: 0;
    }
`;

const variantColorChange = (props:PropTypes) => keyframes`
    11%{
        color: ${(() => {
            if(props.variant){
                if(props.color){
                    return `var(--color-${props.color})`;
                }

                return "#444"
            }

            return "#fff"
        })()};

        background: ${(() => {
            if(props.variant === TEXT || props.variant === OUTLINE) return "transparent"
        })()};
    }

    31%{   
        color: ${(() => (props.variant) && "#fff")()};

        background: ${(() => {
            if(props.variant){ 
                if (props.color) return `var(--color-${props.color})`;
                return `var(--color-default)`;
            }
        })()};
    }

    68%{   
        color: ${(() => (props.variant) && "#fff")()};

        background: ${(() => {
            if(props.variant){ 
                if (props.color) return `var(--color-${props.color})`;
                return `var(--color-default)`;
            }
        })()};
    }

    88%{
        color: ${(() => {
            if(props.variant){
                if(props.color){
                    return `var(--color-${props.color})`;
                }

                return "#444"
            }

            return "#fff"
        })()};

        background: ${(() => {
            if(props.variant === TEXT || props.variant === OUTLINE) return "transparent"
        })()};
    }
`;

export default StyledButton