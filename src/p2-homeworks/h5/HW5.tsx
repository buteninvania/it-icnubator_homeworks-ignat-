import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {BrowserRouter, HashRouter} from 'react-router-dom';
import RoutesComponent from './Routes';

function HW5() {

    return (
        <div>

            <HashRouter>
                <Header/>

                <RoutesComponent/>
            </HashRouter>




        </div>
    )
}

export default HW5
