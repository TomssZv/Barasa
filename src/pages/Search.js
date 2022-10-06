import { useParams } from 'react-router-dom'
import CreateSearch from '../components/CreateSearch'

function Search() {
    let params = useParams()
    if (params.type === 's') {
        return (
            <>
                <h1>{params.name}</h1>
                <CreateSearch url={`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.name.replaceAll(' ', '%20')}`}/>
            </>
        )
    } else if (params.type === 'i') {
        return (
            <>
                <h1>{params.name}</h1>
                <CreateSearch url={`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${params.name}`}/>
            </>
        )
    } else if (params.type === 'c') {
        return (
            <>
                <h1>{params.name.replaceAll('[', '/')}</h1>
                <CreateSearch url={`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.name.replaceAll('[', '/')}`}/>
            </>
        )
    }
}

export default Search