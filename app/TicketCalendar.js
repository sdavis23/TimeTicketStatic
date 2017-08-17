import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactWidgets from 'react-widgets';
import {createSimpleTextColumn, createLinkColumn, OnSiteLinkButton} from "./render_cell_utils.js";



var Calendar = ReactWidgets.Calendar;

var Moment = require('moment');
var momentLocalizer= require('react-widgets/lib/localizers/moment');
momentLocalizer(Moment);



export function ticketCalendar(DataView)
{

	return class extends Component
	{

		constructor(props)
		{
			super(props);

			this.dateChange = this.dateChange.bind(this);

			this.state = {

				current_date: new Date()
			};	
		}


		dateChange(newDate)
		{

			this.setState({current_date: newDate});

		}

		render()
		{
			console.log("Trying to Render");

			var config_visibility = this.props.isAdmin ? "visible" : "hidden";

			return (<div>

						<div style = {{position: "absolute",   left: 30, top: 85}}>
							<OnSiteLinkButton link = "/timeticket_edit/NEW" text= "New Ticket" />
						</div>

						<div style = {{position: "absolute",  visibility: config_visibility, left: 30}}>
							<OnSiteLinkButton link= "http://clientcontrol.onsite3d.com/"  text = "Configuration" /> 
						</div>

						<Calendar onCurrentDateChange = {this.dateChange} style = {{width:500}} defaultValue ={this.state.current_date} />
						<DataView rows = {this.props.initial_rows} date={this.state.current_date} final_view = {this.props.isAdmin}/>
					</div>);
		}


	};
	
}