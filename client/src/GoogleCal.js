import React, { Component } from 'react';
import Calendar from 'react_google_calendar'

const calendar_configuration = {
    api_key: 'AIzaSyBBHh4ulrHRlz2j1fyNQGy89-pbkY-j_gw',
    calendars: [
      {
        name: 'REA Entertainment', // whatever you want to name it
        url: 'm4tta15mskbcm1emjkps9mv2m0@group.calendar.google.com' // your calendar URL
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