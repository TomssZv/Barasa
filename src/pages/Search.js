import React from 'react'
import { useParams } from 'react-router-dom'
import CocktialSearch from '../components/CocktialSearch'
import IngrSearch from '../components/IngrSearch'

function Search() {
    let params = useParams()

    if (params.type === 'i') {
        return (
            <>
                <IngrSearch ingrName={params.name}/>
            </>
        )
    } else if (params.type === 'c') {
        return (
            <>
                <CocktialSearch />
            </>
        )
    }
}

export default Search