import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import {Junior, JuniorPlus, PreJunior} from './pages/PreJunior';
import Error404 from './pages/Error404';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function RoutesComponent() {

    return (
        <div>
            <Routes>
                <Route path="*" element={<Error404/>}/>
                <Route path="/" element={<Navigate replace to={PATH.PRE_JUNIOR} />}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            </Routes>
        </div>
    )
}

export default RoutesComponent
