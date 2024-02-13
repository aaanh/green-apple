/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <StyledView className="flex justify-center items-center p-8">
          <StyledText className="text-green-500 text-4xl">
            Green Apple 🍎
          </StyledText>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default withExpoSnack(App);
