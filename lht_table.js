"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Review Assignment

   Author: Ken
   Date: 03/29/2025 

	
*/

// Declare the test date (thisDay)
let thisDay = new Date("October 1, 2021");

// Declare a variable to store the HTML structure of the events table
let tableHTML = ` <table id="eventTable">
        <caption>Upcoming Events</caption>
        <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Price</th>
        </tr>`;

// Declare the endDate variable (14 days after thisDay)
let endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

// Loop through the eventDates array
for (let i = 0; i < eventDates.length; i++) {
   let eventDate = new Date(eventDates[i]); // Convert event date string to Date object

   // Check if the event falls within the 14-day window
   if (thisDay <= eventDate && eventDate <= endDate) {
       let eventDay = eventDate.toDateString(); // Format event date
       let eventTime = eventDate.toLocaleTimeString(); // Format event time

       // Append row to tableHTML
       tableHTML += `
           <tr>
               <td>${eventDay} @ ${eventTime}</td>
               <td>${eventDescriptions[i]}</td>
               <td>${eventPrices[i]}</td>
           </tr> `;
   }
}

// Close the table
tableHTML += `</table>`;
// Insert the table into the element with ID "eventList"
document.getElementById("eventList").innerHTML = tableHTML;