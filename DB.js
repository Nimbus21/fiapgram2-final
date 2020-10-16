import AsyncStorage from '@react-native-community/async-storage';

/**
 * Insere um objeto json serializado no banco
 * @param {string} key 
 * @param {json} value 
 * @param {function} callback 
 */
const insert = async (key, value, callback = null) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue, callback);
    } catch ( e ) {
        throw new Error('Ocorreu um erro ao salvar no banco de dados!');
    }
}


/**
 * Lê um dado do banco
 * @param {string} key 
 * @param {function} callback 
 */
const read = async (key, callback) => {
    try {
        await AsyncStorage.getItem(key, callback);
    } catch ( e ) {
        throw new Error('Não foi possível ler do banco de dados!');
    }
}


export {insert, read};