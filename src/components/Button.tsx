import React from 'react';
import StyledButton from './styled/StyledButton';

interface PropTypes{
    children: string|HTMLElement|object;
    color?: string;
    variant?: string;
    size?: string;
    disabled?: boolean;
    shadow?: boolean;
    hoverAnimation?: boolean;
}

function Button(props:PropTypes) {
    return (
        <StyledButton shadow={props.shadow} disabled={props.disabled} color={props.color} variant={props.variant} size={props.size} hoverAnimation={props.hoverAnimation}>
            {props.children}
        </StyledButton>
    )
}

export default Button
