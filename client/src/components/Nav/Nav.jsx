import { SearchBar } from "../indexViews"
import { Link } from "react-router-dom"



const Nav=({onSearch})=>{
    return(
        <nav >
           <SearchBar onSearch={onSearch}></SearchBar>
            <button >
            <Link to='/home'>Home</Link>
            </button>
            
            <button >
                <Link to="/create">Formulario</Link>
            </button>

            <button >
            <Link to='/'>Salir</Link>
            </button>
            
            <button >
                <Link to="/landing">Informacion</Link>
            
            </button>
            
            
        </nav>
    )
}

export default Nav