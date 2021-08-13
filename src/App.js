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
				<h1>Task: REST api</h1>
				<aside>
					We will use a cartoon rest api (The Cartoon is Rick And Morty).
				</aside>
				<div className='App-content'>
					<ol>
						<li>
							In the index page (BELOW this content) should have one button
							named get character. when clicked will fetch a <b>Single</b>{' '}
							character.
						</li>
						<li>
							The button should show a loading state while fetching, does not
							let user interact with also while fetching and returns back to
							initial state when finished fetching.
						</li>
						<li>
							Below the button you need to display a maximum of Three (3)
							properties from the returned object. The way you display it is up
							to you (from JSON to a beatifull card).
						</li>
						<li>
							The fetch should also show a little notification in case of{' '}
							<b>
								<i>success</i>
							</b>{' '}
							or{' '}
							<b>
								<i>failure</i>
							</b>
							.This is also up to you if you want to log the messages in the
							browser console or any other variant.
						</li>
						<li>
							You are free to use whatever method to fetch from the API (
							<code>fetch</code>, <code>axios</code> or anything.)
						</li>
					</ol>
				</div>
				<div className='App-banner-wrapper'>
					<b className='App-banner'>HEADS UP !!</b>
					<p>
						The way you will structure your folders and files matters here. Try
						to acheive this task using the BEST way you find.
					</p>
				</div>
			</section>
		</div>
	);
}

export default App;
