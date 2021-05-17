import React from 'react';
import {render} from 'react-dom';
import Footer from './components/Footer';
import ButtonsSection from './components/ButtonsSection';

const App = () => {
    return(
        <>
            <ButtonsSection/>
            <Footer/>
        </>
    )
}

render(<App/>, document.querySelector("#root"));