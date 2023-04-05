import React, {useState} from 'react'

function Footer({gorevler, setGorevler}) {


  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>
				{gorevler.filter((item) => item.completed === false).length}
			</strong> 
			items left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className="selected" >All</a>
			</li>
			<li>
				<a href="#/">Active</a>
			</li>
			<li>
				<a href="#/">Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={() => {setGorevler(gorevler.filter((item) => item.completed === false))}}>
			Clear completed 
		</button>
	</footer>
  )
}

export default Footer;
