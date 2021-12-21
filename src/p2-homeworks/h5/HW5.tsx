import React from 'react'
import {BrowserRouter, HashRouter} from 'react-router-dom';
import RoutesComponent from './Routes';
import {Header} from './haeder/Header';

const HW5 = () =>  {

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
