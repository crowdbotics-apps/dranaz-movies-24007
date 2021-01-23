import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps195625Navigator from '../features/Maps195625/navigator';
import Tutorial195624Navigator from '../features/Tutorial195624/navigator';
import Messaging195623Navigator from '../features/Messaging195623/navigator';
import ArticleList195622Navigator from '../features/ArticleList195622/navigator';
import Achievements195621Navigator from '../features/Achievements195621/navigator';
import Add-Item195618Navigator from '../features/Add-Item195618/navigator';
import BlankScreen195612Navigator from '../features/BlankScreen195612/navigator';
import Contacts195595Navigator from '../features/Contacts195595/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps195625: { screen: Maps195625Navigator },
Tutorial195624: { screen: Tutorial195624Navigator },
Messaging195623: { screen: Messaging195623Navigator },
ArticleList195622: { screen: ArticleList195622Navigator },
Achievements195621: { screen: Achievements195621Navigator },
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
