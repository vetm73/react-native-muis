import React from 'react';
import { Button } from 'reactstrap';
import styles from './FilterButton.css';

const FilterButton = ( props ) => {
    const onClick = () => props.onClick( props.filterValue );
    return (
        <Button color='primary' outline onClick={ onClick } className={ styles.filter }>{ props.label }</Button>
    )
}

export default FilterButton
