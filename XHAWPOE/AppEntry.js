import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// For web, use react-native-web
import { Platform } from 'react-native';
if (Platform.OS === 'web') {
  import 'react-native-web';
}

AppRegistry.registerComponent(appName, () => App);