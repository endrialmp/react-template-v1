import React from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class ReportSummary extends React.Component {
	
	render() {
		return (
			<div className="">
			<Header />
		        <div className="content-header col-xs-12 nopadding">
		        	<h3 className="report">REPORTS</h3>
		        </div>
		    <Footer />
	        </div>
		);
	}
}