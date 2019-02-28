import React, { Component } from 'react';
import Calendar from 'react_google_calendar'

const API_KEY = process.env.REACT_APP_CALENDAR_API_KEY
const CLIENT_ID = process.env.REACT_APP_CALENDAR_ID

const calendar_configuration = {
    api_key: API_KEY,
    calendars: [
      {
        name: 'REA Entertainment', // whatever you want to name it
        url: CLIENT_ID // your calendar URL
      }
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}

class GoogleCal extends Component {
    state = {
        events: []
    }

    render() {
        return (
            
            <div>
                <Calendar
                    events={this.state.events}
                    config={calendar_configuration} />
            </div>
        );
    }
}

export default GoogleCal;