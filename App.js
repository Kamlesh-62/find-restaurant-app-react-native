import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screen/SearchScreen";
import ResultShowScreen from "./src/screen/ResultShowScreen";


const navigator = createStackNavigator({

  SearchScreen: SearchScreen,
  ResultShowScreen: ResultShowScreen
  
}, {
  initialRouteName: 'SearchScreen',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);