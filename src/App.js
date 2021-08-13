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
				<h1>Task: React Routing</h1>
				<aside>
					Using react-router-dom library, Implement the below tasks.
				</aside>
				<div className='App-content'>
					<ol>
						<li>
							The App has proper routing for three pages: index, about and
							support page.
						</li>
						<li>
							The App also has a dynamic page of posts. That is one page has
							list of links of <b>ALL</b> posts and each post has it's{' '}
							<b>OWN</b> dynamicaly created page. <b>HINT:</b> see{' '}
							<a
								href='https://reactrouter.com/web/guides/quick-start/2nd-example-nested-routing'
								target='_tab'>
								Documentation
							</a>
						</li>
					</ol>
				</div>
				<div className='App-banner-wrapper'>
					<b className='App-banner'>HEADS UP !!</b>
					<p>
						The way you will structure your folders and files matters here. Try
						to acheive this task using the BEST way you find. Also you will be
						asked when we review your solution, how you would add more routing
						if your app grows in the future.
					</p>
				</div>
			</section>
		</div>
	);
}

export default App;
