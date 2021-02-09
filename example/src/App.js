import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'acesso-lib';
import WhiteTheme from './themes/white';

const App = () => {
  return (
    <ThemeProvider theme={WhiteTheme}>
      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            height: '100%',
          }}
        >
          <Button onPress={() => null}>test</Button>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
