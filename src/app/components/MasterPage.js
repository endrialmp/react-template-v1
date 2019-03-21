import React from "react";

import {Header} from "./Header";
import {Footer} from "./Footer";

export class MasterPage extends React.Component {
	constructor(props) {
		super(props);
		// console.log(this.props.route.apiattr);
	}

	render() {
		return (
			<div className="">
				<Header />
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 col-sm-9 col-md-12 col-lg-12 nopadding">
							<div className="content">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

