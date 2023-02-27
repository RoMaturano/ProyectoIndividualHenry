import { Link } from "react-router-dom"


const Card = ({id,name,diets,healthScore,steps,image})=>{



return(
    <div>
      <Link to={`detail/${id}`}>
      <h2>Name:{name}</h2>
      </Link>
      
      <h4>Diets:{diets + " , "}</h4>
      
      <img src={image} alt="img not found" width="200" height="250px"/>
      
    </div>
)




}

export default Card



















