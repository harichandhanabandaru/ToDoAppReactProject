import logo from './logo.svg';
import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import AddToDo from "./MyComponents/AddToDo"
import React,{ useState ,useEffect} from 'react';
import './App.css';
import { Switch,BrowserRouter as Router, Route } from "react-router-dom";
import About from './MyComponents/About';

function App() {
  let initTodoList;
  if (localStorage.getItem("todoslist") === null) {
    initTodoList =[];
  }
  else{
    initTodoList = JSON.parse(localStorage.getItem("todoslist"));
  }

  const onDeleteFun = (todo) => {
    console.log("Iam on Delete",todo);
    // let index = todoslist.indexOf(todo);
    // todoslist.splice(index, 1);
    setTodoslist(todoslist.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
    
  };
  localStorage.getItem("todoslist");

  const addToDo = (title,desc) =>{
    console.log("Added",title,desc);
    let sno;
    if(todoslist.length === 0)
    {
        sno=0;
    }
    else{
         sno = todoslist[todoslist.length-1].sno+1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }
    console.log(myTodo);
    setTodoslist([...todoslist,myTodo]);
  }

  //  let todoslist = [
  //    {
  //      sno: 1,
  //      title: "Go to market 1",
  //      desc: "you need to go to market",
  //    },
  //    {
  //      sno: 2,
  //      title: "Go to market 2",
  //      desc: "you need to go to market 2",
  //    },
  //    {
  //      sno: 3,
  //      title: "Go to market 3",
  //      desc: "you need to go to market 3",
  //    },
  //  ];
  const [todoslist, setTodoslist] = useState(initTodoList);
    useEffect(() => {
      localStorage.setItem("todoslist", JSON.stringify(todoslist));
    }, [todoslist]);
    
  return (
    <>
      <Router>
        <Header title="My ToDos List" searchbar={false} />
        <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
                <AddToDo addToDo={addToDo} />
                <Todos todoss={todoslist} onDeleteFun={onDeleteFun} />
              </>
            );
          }}>
          </Route>
          <Route exact path="/about" >
             <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
