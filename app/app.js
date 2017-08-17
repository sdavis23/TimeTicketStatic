import {renderEmployeeTable} from "./employeeTable.js";
import {renderEquipmentTable} from "./equipmentTable.js";
import {loadEquipmentAndLabour, loadDailyTicketEditData, loadAllDailyTickets, loadLabourLineItems, loadDailyTicketViewData, loadEmployeeTableData, loadEquipmentTableData} from "./loadLaravelData.js";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import 'react-widgets/lib/scss/react-widgets.scss';
import {ticketCalendar} from "./TicketCalendar.js";
import Center from 'react-center';
import {DailyTicketViewTable} from "./displayTables.js";
import {DailyWorkTicketEditor} from './projectComponents.js';
import dummyjson from 'dummy-json';
import {calendarJSON, tableJSON} from './dummyJSON.js'





/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
window.jQuery = require('jquery');



window.displayWorkTicketTables= function (root_dom_id, workticket_id)
{

   $.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

   var value  = tableJSON;

 
  /*loadDailyTicketEditData(workticket_id).then(
      function(value)
      { */

        

       var labour_items = value.labour_tableData;
       var equipment_items = value.equipment_tableData;
       var projects = value.projects;
       var dailyticket = value.dailyticket_summary;
       


        ReactDOM.render(<DailyWorkTicketEditor  workticket_id = {workticket_id} 
                                                labour_items = {labour_items} 
                                                equipment_items={equipment_items} 
                                                projects = {projects}
                                                dailyticket_summary = {dailyticket[0]} / > ,

                                                document.getElementById(root_dom_id)); 

        //renderEmployeeTable(value.employees, value.occupations, value.labour_lines, document.getElementById("example"));

    


}



window.loadCalendar = 
  function(root_id, isAdmin)
  {


     
   
        const Calendar = ticketCalendar(DailyTicketViewTable);

      
        ReactDOM.render(<Center><Calendar initial_rows = {calendarJSON} isAdmin = {isAdmin}  /></Center>, document.getElementById(root_id));
    

   

    /*loadAllDailyTickets().then(
      function(val)
      {


        const Calendar = ticketCalendar(DailyTicketViewTable);

      
        ReactDOM.render(<Center><Calendar initial_rows = {val} isAdmin = {isAdmin}  /></Center>, document.getElementById(root_id));

      }); */

  }



