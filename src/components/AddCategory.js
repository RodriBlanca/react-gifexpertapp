import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const hanldeInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={hanldeInputChange}
                placeholder="Ingresa una serie, animé o película"
            />
        </form>
    )
}

AddCategory.ropTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
