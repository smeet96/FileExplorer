import { useState } from 'react'
import json from '../data.json'


const Data = ({list}:any) => {
    const [expanded , setExpanded] = useState<Record<string,boolean>>({})
return (
    <div>
        {
            list.map((node:any) => {
                return (
                    <div key={node.id}>
                        {node.isFolder && (<span onClick={()=> setExpanded((prev)=> ({
                            ...prev,
                            [node.name] : !prev[node.name]
                        }))}>{expanded?.[node.name] ? "-" : "+"}</span>) }
                        {node.name}     
                        <div>
                            {node.children?.map((child:any) => {
                                return (
                                    <div key={child.id} className='pl-10'>
                                        {expanded[node.name] ? child.isFolder  ? <span>+</span> : <span>-</span> : ""}
                                        {expanded[node.name] ? child.name : ""}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })
        }
    </div>
)
}

export const Explorer = () => {
    const [data , setData] = useState(json)
    return (
        <div>
            <Data list={data} />
        </div>
    )
}



export default Explorer 


