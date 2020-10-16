import React, 
{
  useCallback,
  useContext,
  useState
} from 'react';

import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View
} from 'react-native';

import Button from '../components/Button/Button';
import UsernameInput from '../components/Input/UsernameInput';
import PasswordInput from '../components/Input/PasswordInput';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faImages as farImages } from '@fortawesome/free-regular-svg-icons';

import Colors from '../colors';

import {read} from '../DB';

import UserContext from '../contexts/UserContext';

const Login = (props) => {

  const { setGlobalUsername } = useContext(UserContext);

  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  
  const handleLogin = () => {
    read(username, (errors, data) => {
      if (!errors && data !== null) {
        const jsonData = JSON.parse(data);
        if (jsonData.password === password) {
          setGlobalUsername(username);
          props.navigation.navigate('Main');
        } else {
          alert('Usuário ou senha inválida!');
        }
      } else {
        alert('Não foi possível consultar no banco!');
      }
    })
  }

  const handleCadastreSe = useCallback(() => {
    props.navigation.navigate('Cadastro');
  }, []);

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.logotipo }>
        <FontAwesomeIcon 
          color={ Colors.magenta } 
          icon={ farImages } 
          size={ 128 } />

        <Text style={ styles.logotipoTexto }>
          FIAPGram 2.0
        </Text>
      </View>

      <UsernameInput 
        onChangeText={ (txt) => setUsername(txt) }
        value={ username }/>

      <PasswordInput 
        onChangeText={ (txt) => setPassword(txt) }
        value={ password }/>

      <Button 
        onPress={ useCallback(() => handleLogin()) }
        title="Login"/>

      <TouchableOpacity 
        onPress={ useCallback(() => handleCadastreSe()) }
        style={ styles.btnCadastreSe }>
          <Text style={ styles.btnCadastreSeTexto }>
            Cadastre-se
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnCadastreSe : {
    marginTop : 16
  },
  btnCadastreSeTexto : {
    textAlign : 'center'
  },
  container : {
    flex : 1,
    padding : 16,
    justifyContent : 'center'
  },  
  logotipo : {
    alignItems : 'center',
    marginBottom : 16
  },
  logotipoTexto : {
    fontSize : 20,
    fontWeight : 'bold'
  }
});

export default Login;