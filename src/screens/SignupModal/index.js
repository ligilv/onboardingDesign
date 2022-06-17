import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackgroundBase,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import React from 'react';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import SignupForm from '../Signup/SignupForm';
const SignupModal = () => {
  const navigation = useNavigation();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        // this.closeButtonFunction()
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <BlurView
          blurType="dark"
          reducedTransparencyFallbackColor="black"
          style={{
            //   height: '100%',
            flex: 1,

            //   backgroundColor: 'red',
            //   opacity: 0.9,
          }}>
          <ScrollView
            contentContainerStyle={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              paddingBottom: 10,
            }}
            style={{}}>
            <SignupForm isModal={true} />
          </ScrollView>
        </BlurView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default SignupModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
