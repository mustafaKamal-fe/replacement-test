// HINT: you can insert your solution here
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
				<h1>Fix the Styles</h1>
				<aside>
					As you can see the website main page looks really bad. Now you must do
					the following to make it look cool:
				</aside>
				<div className='App-content'>
					<ol>
						<li>
							The page looks really really bad. Apply the styles related to{' '}
							<i>
								<b>This</b>
							</i>{' '}
							page. Do not worry about the <code>CSS</code> code as it is
							already written for you.
						</li>
						<li>
							Now the page styles look a lot better. However, we have one nasty
							bug in the page layout. Please add global-styles that are already
							written for you inside the <code>index.css</code> file to have
							this problem solved.
						</li>
					</ol>
				</div>
			</section>
			<section className='App-section'>
				<h1>I can center anything !!</h1>
				<aside>
					{' '}
					Now you are asked to render a{' '}
					<code>
						<b>
							<i>div</i>
						</b>
					</code>{' '}
					element that is First, centered in the middle of the page, And Second
					has the word "Metallica" that is also rendered in the middle of that
					element. You can use whatever approach you are comfortable with.
				</aside>
				<div className='App-content'>
					{/* HINT: CSS Flexbox could help here */}
					{/* Insert Your Solution Here */}
				</div>
			</section>
		</div>
	);
}

export default App;
