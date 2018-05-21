import React from 'react';
import { Button } from 'reactstrap';

const FilterButton = ( props ) => {
    const onClick = () => props.onClick( props.filterValue );
    return (
        <Button onClick={ onClick }>{ props.label }</Button>
    )
}

export default FilterButton
