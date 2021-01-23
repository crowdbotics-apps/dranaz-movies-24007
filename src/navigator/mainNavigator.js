import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item195618Navigator from '../features/Add-Item195618/navigator';
import BlankScreen195612Navigator from '../features/BlankScreen195612/navigator';
import Contacts195595Navigator from '../features/Contacts195595/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item195618: { screen: Add-Item195618Navigator },
BlankScreen195612: { screen: BlankScreen195612Navigator },
Contacts195595: { screen: Contacts195595Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
