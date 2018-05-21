import React from 'react';
import Menu from './Menu';

const AppContainer = ( props ) => {
    return (
        <div>
            <Menu />
            { props.children }
        </div>
    )
}

export default AppContainer;
