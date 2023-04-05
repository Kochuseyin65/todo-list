import React, {useState} from 'react'

function Header({gorevler, setGorevler}) {
	
	const [task, setTask] = useState("")

	const onSubmit = (e) =>{
        e.preventDefault();

        if(task === ''){
            return false;
        }
        setGorevler([...gorevler, {taskName: task, completed: false}]);
        //console.log(form,'1111');
		setTask("")
    }

  return (
    <header className="header">
		<h1>todos</h1>
		<form onSubmit={onSubmit}>
			<input 
			name='taskName'
			className="new-todo" 
			placeholder="What needs to be done?" 
			autoFocus 
			value={task}
			onChange={(e) =>{
				setTask(e.target.value)
			}}
			
			/>
		</form>
	</header>
  )
}

export default Header;