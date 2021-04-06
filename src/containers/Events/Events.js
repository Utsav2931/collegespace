import React from "react";
import './events.css'

import BasicLayout from '../../components/UI/BasicCompPadding/BasicLayout';
const Events = () => {
    return (
        <BasicLayout>

            <div>
                <center><h1 className="contentHead3">Events</h1></center>
                <ul class="timeline">
                    <li class="timeline-event">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">April 2011 - Today</p>
                            <h3>Great, thank you! GmbH</h3>
                            <h4>CEO of a web studios</h4>
                            <p><strong>Focus: Frontend development </strong>Developing sophisticated, animated, responsive and adaptive websites with HTML5, SCSS, jQuery; for all browsers, optimized for desktops, notebooks, smartphones and tablets (iOS, Android, Windows).</p>
                            <p><strong>Project management with Scrum</strong>Constant improvement of the agile development process, for example through Grunt, Yeoman, GIT, JIRA and BrowserStack.</p>
                        </div>
                    </li>
                    <li class="timeline-event">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">November 2009 - March 2011</p>
                            <h3>Freelancer</h3>
                            <h4>Designer und Autor</h4>
                            <p>Conception, design and production of digital magazines with InDesign, the Adobe Digital Publishing Suite and HTML5. Co-author of the specialist books "Digital Publishing for Tablets" and "Adobe Digital Publishing Suite" published by dpunkt.verlag.</p>
                        </div>
                    </li>
                    <li class="timeline-event">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">April 2011 - heute</p>
                            <h3>konplan gmbh</h3>
                            <h4>IT-Consultant</h4>
                            <p><strong>System architecture, consulting,</strong>conception and modeling of systems and APIs for digital publishing and entitlement according to SOA</p>
                        </div>
                    </li>
                </ul>
            </div>
        </BasicLayout>
    )
}

export default Events;