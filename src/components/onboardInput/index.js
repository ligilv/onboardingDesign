import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const OnboardInput = ({placeholder, style, leftIcon, rightIcon, rIconName}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          borderColor: '#35373B',
          borderWidth: 1.5,
          borderRadius: 4,
          padding: 12,
          marginTop: 10,
          height: 43,
        },
        style,
      ]}>
      <TextInput
        style={{
          flex: 1,

          backgroundColor: colors.primaryBg,
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderColor}
      />
      {rightIcon ? <Image source={rIconName} /> : null}
    </View>
  );
};

export default OnboardInput;

const styles = StyleSheet.create({});
