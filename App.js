import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleSwitch = () => setDarkMode(previousState => !previousState);
  return (
    <View style={darkMode ? styles.light : styles.dark}>
      <Switch
        trackColor={{false: '#767577', true: '#fff'}}
        thumbColor={darkMode ? '#00ff00' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={darkMode}
      />
      {darkMode ? (
        <Text style={{color: 'white'}}>This Dark mode</Text>
      ) : (
        <Text>This is Light mode</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  light: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  dark: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;
