import React, {
  useState
} from 'react';

import { 
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from '../components/Button/Button';

import UsernameInput from '../components/Input/UsernameInput';
import EmailInput from '../components/Input/EmailInput';
import PasswordInput from '../components/Input/PasswordInput';

import {insert, read} from '../DB';

const Cadastro = (props) => {
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [errors, setErrors] = useState([]);

  const validar = () => {
    const newErrors = [];
    if ( username.trim().length < 6 ) {
      newErrors.push('Nome de usuário precisa ter mais de 06 caracteres!');
    }

    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if ( ! regexEmail.test(email) ) {
      newErrors.push('E-mail informado não é válido!');
    }

    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
    if ( !regexPassword.test(password) ) {
      newErrors.push('Senha precisa ter caracteres maiúsculos, minúsculos e números!');
    }

    if ( password !== confirmPassword ) {
      newErrors.push('Confirmar senha não confere!');
    }

    setErrors(newErrors);

    return newErrors.length == 0;
  }

  const handleSalvar = () => {
    if ( validar() ) {
      read(username, (errors, data) => {
        if (!errors) {
          if ( data === null ) {
            insert(username, { password, email }, (errors) => {
              if ( ! errors ) {
                alert('Cadastro realizado com sucesso!');
                props.navigation.navigate('Login');
              } 
            });
          } else {
            setErrors(['Usuário já existente!']);
          }
        }
      });
    }
  }

  return (
    <SafeAreaView style={ styles.container }>
        <UsernameInput
          onChangeText={ (txt) => setUsername(txt) }
          value={ username }/>

        <EmailInput
          onChangeText={ (txt) => setEmail(txt) }
          value={ email } />

        <PasswordInput
          onChangeText={ (txt) => setPassword(txt) }
          value={ password } />

        <PasswordInput 
          confirm
          onChangeText={ (txt) => setConfirmPassword(txt) }
          value={ confirmPassword } />

        <Button 
          onPress={ () => handleSalvar() }
          title="Salvar"/>

        {errors.length > 0 && 
          <View style={styles.errors}>
            {errors.map((erro) => <Text style={ styles.erro }>{erro}</Text>)}
          </View>
        }
    </SafeAreaView>
  );
}

export default Cadastro;

const styles = StyleSheet.create({
  container : {
    padding : 16
  },
  erro : {
    color : '#333',
    marginBottom : 8
  },
  errors : {
    backgroundColor : '#DDD',
    marginTop : 8,
    padding : 16
  }
});