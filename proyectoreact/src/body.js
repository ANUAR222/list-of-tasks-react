import { useState } from "react";
const Body=()=>{
    const [items,setItems]=useState([
        {
            id:1,
            checked:false,
            text:'Buy milk'
        },
        {
            id:2,
            checked:false,
            text:'Buy eggs'
        },
        {
            id:3,
            checked:false,
            text:'Buy bread'
        }
    ]); 
    function getElementById(id){
        return document.getElementById(id);
    }
        return(
        <main>
            <ul>
                {items.map(item=>(
                    <li key={item.id}>
                        <input type='checkbox' checked={item.checked} onChange={()=>{
                            setItems(items.map(i=>(i.id===item.id?{...i,checked:!i.checked}:i)));
                        }
                        }/>
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
            <input id='text' type="text" placeholder='Add new item'/>
            <button onClick={()=>{
                setItems(
                    items.concat([{
                    id:items.length+1,
                    checked:false,
                    text: getElementById('text').value
                }]));
            }}>Add item</button>
            
            <button onClick={()=>{
                setItems(items.filter(item=>!item.checked));
            }
            }>Remove checked items</button>
              </main>
        )
    }
export default Body;