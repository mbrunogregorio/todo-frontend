import React from 'react';
import { HashRouter as Router, Link } from "react-router-dom";

export default props => (
	<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="#">
			<i className="fa fa-calendar-check-o" />
			Inesquecível
			</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			
				<ul className="navbar-nav">
				<Router>
					<li className="nav-item active">
						<Link className="nav-link" to="/todos">Tarefas</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">Sobre</Link>
					</li>
					</Router>
				</ul>
			
		</div>
	</nav>
	</div>
  );
