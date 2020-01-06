import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import Input from '../components/input';
import './index.css';
import List from '../components/List';
import { TodoList } from '../stores/todolist';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Router from 'next/router';
import {autorun, observable, reaction} from 'mobx';
import { inject,observer,Provider } from 'mobx-react';
// App
//const Lists=TodoList;

const App = observer((props) => {

    const [value,setValue]=useState("");
    const [todoList,setTodos]=useState([]);
    

    useEffect(()=>{
      TodoList.addTodo(props.obj);
      console.log(TodoList.getTodos);
    },[props.obj]);

    //  useEffect(()=>{
    //   Lists.addTodo(props.obj);
      
    //   // return ()=>{
    //   //   console.log("unmonunt");
    //   // }
    //  },[props.obj]);

    function onInput(val){
        setValue(val);
    }

    const submitTodo=()=>{
     // Router.push('/about');
        let todos=[...todoList];
        let obj={
            name:value,
            id:new Date().toISOString(),
            status:"pending"
        }
        setTodos([...todos,obj]);
        TodoList.addTodo(obj);
    }

    const todos=TodoList.getTodos;

   return(
        <div className="container">
                <Link href="/about">
                  <a title="about page">{props.about}</a>
                </Link>
                <Link href="/todos">
                  <a title="about page">Todos Page</a>
                </Link>
                <div className="inputContainer">
                 <Input onChange={onInput} submit={submitTodo}/>
                 {todos && <List todos={TodoList.getTodos}/>}
                </div>
        </div>
   );
    
});

App.getInitialProps = async function() {
  console.log("init props started");
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);

  // return {
  //   shows: data.map(entry => entry.show)
  // };
  return {
    about:"about",
    obj:{
      name:"first",
      id:new Date().toISOString(),
      status:"pending"
  }
  }
};
//   const Index=()=>(
//      <Provider Lists={Lists}><App/></Provider>
//   )
 export default App ;
