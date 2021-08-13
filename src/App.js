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
				<h1>Task: React State Management</h1>
				<aside>
					You will use <code>useState</code> And <code>useEffect</code> to
					control the App state.
				</aside>
				<div className='App-content'>
					<ol>
						<li>
							In the index page{' '}
							<b>
								<i>AND</i>
							</b>{' '}
							after the page renders, you need to log to the browser console two
							messages, The first one says "Hello" and the second says "Hello
							again". However, the first message should always come first (no
							brainer!!) and must not live besides the second message.
						</li>
						<li>
							Now, forget about the above task. You need to have two buttons,
							One increments a counter by one, and the other decrements the
							counter by one (simple counters). the two should work properly and
							cause re-rendering with correct counter value. Finally, you need
							to build a small component that will show the counter value.
							However, this component lives outside the component that has the
							counter state dispatch functions (Drill It !!).
						</li>
					</ol>
				</div>
			</section>
		</div>
	);
}

export default App;
