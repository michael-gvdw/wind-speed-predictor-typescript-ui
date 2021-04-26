import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// styles
import { Wrapper } from './App.styles'

// types 
import { DrawerItems } from './Draweritems'

// 
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { IndeterminateCheckBoxOutlined } from '@material-ui/icons';

export type WindData = {
  wind: number;
  lower: number;
  upper: number;
}

function App() {

  const [dispDrawer, setDispDrawer] = useState(false)

  return (
    <Router>
      {/* Side Navigation */}
      <Drawer anchor={`left`} open={dispDrawer} onClose={() => setDispDrawer(!dispDrawer)}>
        <List>
          {DrawerItems.map((item, index) => (
              <ListItem button component={Link} to={item.link}  key={index}>
                <ListItemIcon>{<item.icon/>}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
        </List>
      </Drawer>

      <button onClick={() => setDispDrawer(!dispDrawer)}>click</button>      

      {/* declare different routes */}
      <Switch>
        {/* <Route exact path={[`/`, `/home`]} component={null}/>
        <Route path={`/about`} component={null}/>
        <Route path={`/terms`} component={null}/> */}
      </Switch>
    </Router>  
  );
}

export default App;
