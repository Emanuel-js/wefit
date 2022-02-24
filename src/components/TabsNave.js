import React from 'react'
import { Tab } from 'react-bootstrap';
function TabsNave({ title, eventKey, children }) {
    return (

        <Tab eventKey={eventKey} title={title}>
            {children}
        </Tab>

    )
}

export default TabsNave