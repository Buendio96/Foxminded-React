import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Posts from './components/Posts';
import ToDo from './components/ToDo';
import UserList from './components/UserList';
import UserPopap from './components/UserPopap';

function App() {
	const navigate = useNavigate();
	return (
		<div style={{
			margin: '0 auto', maxWidth: '1000px',
			background: '#1111',
			padding: '20px 40px ',
			boxShadow: '0 0 14px 1px #111',
			minHeight: '100vh',
		}}>
			<header style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '100%',
				fontSize: '20px',
				fontWeight: 600
			}}>
				<h1 style={{
					textTransform: 'uppercase',
					fontSize: '30px',
					color: 'rgba(4, 0, 56, 0.8)'
				}}>
					Header
				</h1>
				<nav>
					<ul style={{ display: 'flex', columnGap: '20px', background: 'rgba(35, 30, 97, 0.2)', padding: '10px', borderRadius: '20px ' }}>
						<li>
							<Link to="/posts">Posts list</Link>
						</li>
						<li>
							<Link to="/todos">ToDo list</Link>
						</li>
						<li>
							<Link to="/users">Users list</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Routes>
				<Route path="/" element={<Posts />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/todos" element={<ToDo />} />
				<Route path="/users" element={<UserList />} />
				<Route path="/users/:userId" element={<UserPopap onClose={() => { navigate('/users'); }} />} />
			</Routes>
		</div>
	)
}

export default App;
