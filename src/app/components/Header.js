import React from "react";
import {Link} from "react-router"

export class Header extends React.Component {

	componentDidMount() {
		$('.drAcc a').click(function(e){
			$(this).siblings('ul').slideToggle(300);
		});
	}

	render() {
		return(
			<div className="container-fluid">
			    <div className="row header">
			        <div className="col-md-1 nopadding">
			            <div className="logo">
			                <img src="/assets/images/readyseat-torquise.png" alt="readyseat-logo"/>
			            </div>
			        </div>
			        <div className="col-md-11 nopadding">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-sm-4 venui">
			                    </div>
			                    <div className="col-sm-8 navi">
			                        <ul>
			                            <li><Link to={'/reports'}><span className="glyphicon glyphicon-stats"></span> REPORTS</Link></li>
			                            <li><Link to={'/pos'} target="_blank"><span className="glyphicon glyphicon-usd"></span> <span>POS</span></Link></li>
			                            <li><Link to={'/branches'}><span className="glyphicon glyphicon-tree-deciduous"></span> BRANCHES</Link></li>
			                            <li><Link to={'/notifications'}><span className="glyphicon glyphicon-bell"></span><span className="notice">6</span></Link></li>
			                            <li className="drAcc">
			                                <a href='#'>MY ACCOUNT <span className="glyphicon glyphicon-chevron-down"></span></a>
			                                <ul>
			                                    <li><Link to={'/profile'}><span className="glyphicon glyphicon-user"></span> PROFILE</Link></li>
			                                    <li><Link to={'/'}><span className="glyphicon glyphicon-off"></span> LOG OUT</Link></li>
			                                </ul>
			                            </li>
			                        </ul>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
};