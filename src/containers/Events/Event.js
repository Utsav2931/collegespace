import React from 'react'
import EventFetch from './fetchevent'

const Event = (props) =>
    props.events.map((event) => {
        return (
            <div>
                <EventFetch
                    title={event.title}
                    desc={event.desc}
                    date={event.date}
                    author={event.author}
                    link={event.link}
                    time={event.time}
                />
            </div>
        );
    });
export default Event
