import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={() => console.log('Fetured')}>Event Starts in</ListItem>
                <ListItem button onClick={() => console.log('Fetured')}>Venue NFO</ListItem>
                <ListItem button onClick={() => console.log('Fetured')}>Highlights</ListItem>
                <ListItem button onClick={() => console.log('Fetured')}>Pricing</ListItem>
                <ListItem button onClick={() => console.log('Fetured')}>Location</ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;