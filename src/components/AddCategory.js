import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({ setCategories }) {

    const [inputValue, seTinputValue] = useState('')

    const handleInputChange = (e) => { seTinputValue(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim() !== '') {
            setCategories(cats => [inputValue, ...cats])
            seTinputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
