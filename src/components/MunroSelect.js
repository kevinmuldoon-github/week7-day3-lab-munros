import React from 'react';
// import SelectOption from './SelectOption';

const MunroSelect = ( { munros, onMunroSelected}) => {

    const handleChange = function(event) {
        const munro = munros[event.target.value];
        onMunroSelected(munro);
    };

    const munrosOptions = munros.map ((munro, index) => {
        return <option value={index} key={index}>{munro.name}</option>
    });

    return (
        <div>
            <select onChange={handleChange}>{munrosOptions}</select>
        </div>


    );

};

export default MunroSelect;