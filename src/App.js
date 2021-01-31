import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import WidgetApp from './containers/WidgetApp';
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropDownPage';
import HomePage from './pages/HomePage';
import TranslatePage from './pages/TranslatePage';
import WikiSearchPage from './pages/WikiSearchPage';
import './styles/app.css';

const App = () => {
	return (
		<div id="app" className="app container-fluid">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/widgets" component={WidgetApp} />
				<Route path="/widgets/accordion" component={AccordionPage} />
				<Route path="/widgets/dropdown" component={DropDownPage} />
				<Route path="/widgets/translate" component={TranslatePage} />
				<Route path="/widgets/wikisearch" component={WikiSearchPage} />
			</Switch>
		</div>
	);
};

export default App;
