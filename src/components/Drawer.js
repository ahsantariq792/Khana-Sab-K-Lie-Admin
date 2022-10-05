import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";


const Drawer = props => {
  const { history } = props;
  const itemsList = [
    {
      text: "Dashboard",
      icon: "abc",
      onClick: () => history.push("/")
    },
    {
      text: "About",
      icon: "abc",
      onClick: () => history.push("/addmanager")
    },
   
  ];
  return (
    <MUIDrawer variant="permanent">
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
