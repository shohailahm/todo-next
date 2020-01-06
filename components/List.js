import React,{ useState } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';


const List=observer(({todos})=>{
  
    return(
        <React.Fragment>
            <ul>
                {
                todos.map((ite,ind)=>(
                    <li style={{textDecoration:ite.status==="completed"?"underline":"none"}} key={ite.id} >
                        <Link href={{ pathname: '/todos/todoitem', query: { id: `${ite.id}` } }} >
                            <a>
                            {ite.name}
                            </a>
                        </Link>
                       
                    </li>
                ))
            }
            </ul>
          
        </React.Fragment>
    )
    
});


export default React.memo(List);