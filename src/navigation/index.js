import { createSwitchNavigator, createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { FeedScreen } from '../screens';

export default TabNavigator(
    {
        Feed: FeedScreen,
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            
            showIcon: true,
            showLabel: false,
            style: {
                height: 0,
            }
        }
    }
);
