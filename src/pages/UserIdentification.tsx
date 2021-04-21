import { Jost_100Thin } from '@expo-google-fonts/jost';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {
  const { navigate } = useNavigation();

  const handleSubmit = () => {
    navigate('Confirmation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <Text style={styles.emoji}>😃</Text>
            <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" />
            <View style={styles.footer}>
              <Button title="Confirmar" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 32,
  },
  emoji: {
    fontSize: 44,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.gray,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  footer: {
    width: ' 100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
