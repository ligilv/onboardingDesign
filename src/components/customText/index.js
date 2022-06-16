import React from 'react';
import {Text, View} from 'react-native';

function CustomText({
  Font = 'Inter-Regular',
  Size = 14,
  Color = 'white',
  value = '',
  style = {},
  onPress,
}) {
  return (
    <Text
      onPress={onPress}
      style={[
        {
          fontFamily: Font,
          fontSize: Size,
          color: Color,
        },
        style,
      ]}>
      {value}
    </Text>
  );
}

export default CustomText;
