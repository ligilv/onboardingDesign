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
  Button,
} from 'react-native';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import React, {useState} from 'react';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import SignupForm from '../../screens/Signup/SignupForm';
import LoginForm from '../../screens/Login/LoginForm';
const OnBoardingModal = () => {
  const [currentModal, setCurrentModal] = useState('login');
  const navigation = useNavigation();
  const changeModal = modalname => {
    setCurrentModal(modalname);
  };
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
            {currentModal == 'login' ? (
              <LoginForm isModal={true} changeModal={changeModal} />
            ) : null}

            {currentModal == 'signup' ? (
              <SignupForm isModal={true} changeModal={changeModal} />
            ) : null}
          </ScrollView>
        </BlurView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default OnBoardingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
