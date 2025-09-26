import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import HomeScreen from '@screens/HomeScreen'
import FavoritesScreen from '@screens/FavoritesScreen'
import { RootStackParamList } from '@screens/types/root'
import BackButton from '@component/ui/BackButton'

const Stack = createStackNavigator<RootStackParamList>()
const FavoritesHeaderLeft = () => <BackButton />

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        cardStyle: { backgroundColor: '#FFFFFF' },
        headerShown: true,
        gestureEnabled: true,
        detachPreviousScreen: !navigation.isFocused(),
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerLeft: FavoritesHeaderLeft,
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default RootRouter
