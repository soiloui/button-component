import styled from 'styled-components';

const StyledButtonsSection = styled.section`
    overflow: hidden;

    .width-wrapper{
        position: relative;
        padding: 1em 3em;
        margin: auto;

        max-width: 1200px;
    }

    .decorative-bg{
        position: fixed;
        top: 0;
        left: 30%;
        
        height: 100vh;
        width: 150%;

        background: rgba(81, 104, 255, 0.2);
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);

        z-index: -10;
    }

    .decorative-bg::before{
        content: "";
        position: absolute;
        top: 0;
        right: -10%;
        width: 100%;
        height: 100%;

        background: rgba(81, 104, 255, 0.15);
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }

    h1{
        padding: 1em;

        text-align: center;
        font-size: 2.2rem;
        font-weight: 600;

        color: rgba(81, 104, 255, 0.9);

        box-shadow: 0 2px 8px #00000010;
    }

    h2 {
        margin-top: 3em;
        margin-bottom: 0.5em;
    }

    h2:first-of-type{
        margin-top: 1em;
    }

    h2 ~ p{
        padding-left: 0.5em;
        width: fit-content;

        text-transform: capitalize;
        border-bottom: 2px solid var(--color-primary);
    }

    .row{
        display: flex;
        flex-wrap: wrap;
        margin: 2em 0;
        padding: 1em;

        text-align: center;
        background: rgb(240, 240, 240);
        border-radius: 4px;
        box-shadow: 2px 5px 6px rgba(0,0,0,0.1);
    }
    .row:nth-child(odd){
        background: rgb(245, 245, 245);
    }

    .row>:nth-child(n){
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .row--2>:nth-child(n){
        width: 40%;
    }

    .row--3>:nth-child(n){
        width: 25%;
    }

    .row--big-code .button-card{
        justify-content: space-between;
    }

    .row--big-code .button-card code{
        margin-top: 1em;
        height: 100%;
        
        text-align: left;
        white-space: pre-wrap;

        padding: 1em;
        border-left: 1px solid rgba(81, 104, 255, 0.1);
        border-right: 1px solid rgba(81, 104, 255, 0.1);
    }

    .row > code{
        min-width: 100%;
        margin-bottom: 1em;
    }

    .button-card{
        display: flex;
        flex-direction: column;

        margin: 1.5em 2em;

        code{
            margin-bottom: 0.7em;
        }
    }
`;

export default StyledButtonsSection
