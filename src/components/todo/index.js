import React,{useState} from 'react'

import List from './list';
import Header from './header';
import Footer from './footer';

function ToDo() {
    
    const [gorevler, setGorevler] = useState([
		{taskName: "react öğren", completed: true},
		{taskName: "java öğren", completed: false},
		{taskName: "javascript öğren", completed: false},
		{taskName: "python öğren", completed: true},
	])
    

    const [activeList, setActiveList] = useState([])
    const [completedList, setCompletedList] = useState([])

    

    return (
    <section className="todoapp">
        <Header gorevler={gorevler} setGorevler={setGorevler}/>

        <List gorevler={gorevler} setGorevler={setGorevler} activeList={activeList} completedList={completedList}/>

        <Footer gorevler={gorevler} setGorevler={setGorevler} />
  </section>
    )
}

export default ToDo;