import React,{ useState } from 'react';
import { useRouter } from 'next/router'
import { TodoList } from '../../stores/todolist';
import List from '../../components/List';

const TodoItem=({todos})=>{
    const router = useRouter();
    let id=router.query.id;
   
    // const Todo=Lists.getTodos.find((ite)=>{
    //     return ite.id==id;
    // });
    console.log(Todo);
    return(
        <React.Fragment>
          <div>
              {Todo && Todo.name}
          </div>
        </React.Fragment>
    )
    
}


export default TodoItem;