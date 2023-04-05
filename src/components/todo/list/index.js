import React from 'react'

function List({gorevler, setGorevler, activeList, completedList}) {
	
	

	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label 
			htmlFor="toggle-all"
			onClick={() => {
				gorevler.every((item) => item.completed ===true) === true ? 
					setGorevler(gorevler.map((itemMap) => { return {taskName: itemMap.taskName, completed: false}})) :
					setGorevler(gorevler.map((itemMap) => { return {taskName: itemMap.taskName, completed: true}}))
			}} 
			/>

			<ul className="todo-list">
				
				{
				gorevler.map((gorev, i) => (
					<li className={gorev.completed === true ? "completed": "false"} key={i}>
					<div className="view">
						<input 
						className="toggle" 
						type="checkbox"
						onChange={(e) => {
							setGorevler(gorevler.map((item) => {
								return(
								item.taskName === gorev.taskName ? 
									{taskName: gorev.taskName, completed: gorev.completed === false ? true: false} : item 
								)
							}))
						}}
						checked={gorev.completed === true}
						/>

						<label>{gorev.taskName}</label>
						<button 
						className="destroy"
						onClick={() => {
							setGorevler(gorevler.filter((item) => item.taskName !== gorev.taskName))
						}}
						/>
					</div>
				</li>
				))
				}
			</ul>
		</section>
	)
}



export default List;
