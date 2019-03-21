import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {MasterPage} from "./components/MasterPage";

//home
import {Home} from "./components/Home";
//report
import {ReportSummary} from "./components/reports/Summary";


class App extends React.Component {

	render() {
		return (
			<Router history={browserHistory}>
				<Route path={"/"} component={MasterPage}>
					<IndexRoute component={Home} />
				</Route>
				<Route path={"reports"} component={ReportSummary} />
			</Router>
		);
	}
}

render(<App/>, window.document.getElementById("app"));