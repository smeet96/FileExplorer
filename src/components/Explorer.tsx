import { useState } from 'react'
import json from '../data.json'

export const Explorer = () => {
    const [data , setData] = useState(json)
return (
    <div>{
data.map( node => {
  return(
    <div key={node.id}>
        {node.name}
    </div>
  )  
})
}
    </div>

)
}

export default Explorer 