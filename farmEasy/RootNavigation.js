import { DrawerActions } from "@react-navigation/native";



// add this function
function openDrawer(routeName, params) {
  _navigator.dispatch(DrawerActions.openDrawer());
}


export default openDrawer