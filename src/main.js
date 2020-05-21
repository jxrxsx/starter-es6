import axios from 'axios';

class Api {
  static async getUserInfo(username){
    //axios retorna promise
    const response = await axios.get(`https://api.github.com/users/${username}`);

    console.log(response);
  }
}

console.log('chegou aqui');

Api.getUserInfo('jxrxsx');