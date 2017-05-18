import { AsyncStorage } from 'react-native'

export default {
  getItem : async function (key){
    let value = await AsyncStorageGetItem(key)
    return { '1': 0, '2': 0, '3': 0 }
  }
}

async function AsyncStorageGetItem(key) {
  return new Promise((resolve,reject)=>{
    AsyncStorage.getItem(key, function (value) {
      resolve(value)
    })
  })
}