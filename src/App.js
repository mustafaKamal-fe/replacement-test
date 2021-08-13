import { Link } from 'react-router-dom';
import LayoutImg from './assets/layout.png';
import './App.css';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Always:</h1>
				<ul>
					<li>solve tasks in the order they appear.</li>
					<li>
						After you finish working on the branch, commit your work localy{' '}
					</li>
					<li>Ask me anything, anytime!!</li>
				</ul>
			</header>
			<section className='App-section'>
				<h1>Task: Page Layout</h1>
				<aside>
					We always come to a point where we have to plan ahead how the
					different parts of a page should be placed. This moment, is one of 'em
					lol!!.
				</aside>
				<div className='App-content'>
					<ol>
						<li>
							If i click on the link below, i should go to a page named
							"organized", that is already created for you, and i should see a
							layout that looks exactly like the image below. Pretty easy !!
						</li>
					</ol>
				</div>
				<Link className='link' to='/organized'>
					Go To Organized Layout Page
				</Link>
				<div className='App-img'>
					<img src={LayoutImg} alt='layout' />
				</div>
			</section>
		</div>
	);
}

export default App;
