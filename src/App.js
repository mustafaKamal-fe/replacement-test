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
				<h1>Task: JS Functionality</h1>
				<aside>
					Javascript is an event driven language, among other things. Here we
					will use it to provide day-to-day UI functionality. We will see in the
					following task.
				</aside>
				<div className='App-content'>
					<ol>
						<li>
							Build a very simple form with only{' '}
							<b>
								<i>ONE</i>
							</b>{' '}
							input of type{' '}
							<b>
								<i>text</i>
							</b>{' '}
							and named song. That could be your favorite song !!
						</li>
						<li>
							Below the input there is a submit button that is when clicked
							should <b>LOG</b> the input value.
						</li>
						<li>
							However, we also need to validate our input to be a valid song
							name. Hence, attach an{' '}
							<b>
								<i>event</i>
							</b>{' '}
							to the input that is when the mouse leaves input field, input
							value gets validated against a criteria provided below.
						</li>
						<li>
							<b>Bonus:</b> if you have time left, you can add some prompt text
							(on errros and success) to notify users about current input state.
						</li>
					</ol>
				</div>
				<div className='App-banner-wrapper'>
					<b className='App-banner'>HEADS UP !!</b>
					<p>
						This task is pretty simple, i know. However, what really makes your
						solution stands out is the way you will organize your code, document
						your code and structure your files and folders.
					</p>
				</div>
			</section>
		</div>
	);
}

export default App;
