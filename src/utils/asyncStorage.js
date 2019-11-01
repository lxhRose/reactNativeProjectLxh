import AsyncStorage from "@react-native-community/async-storage";

const _AsyncStorage = {
  setItem: async function (key, value) {
    try {
      return await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage.setItem', error);
    }
  },
  getItem: async function (key) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('AsyncStorage.getItem', error);
    }
  },
  removeItem: async function (key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('AsyncStorage.removeItem', error);
    }
  },
  getMultiple: async function (keyArr) { // 批量取
    // keyArr = ['@MyApp_user', '@MyApp_key']
    // 返回结构[["@MyApp_user", "value_1"], ["@MyApp_key", "value_2"]]
    try {
      return await AsyncStorage.multiGet(keyArr);
    } catch (error) {
      console.log('AsyncStorage.getMultiple', error);
    }
  },
  setMultiple: async function (keyValueArr) { // 批量存
    // keyValueArr = [["@MyApp_user", "value_1"], ["@MyApp_key", "value_2"]]
    try {
      await AsyncStorage.multiSet(keyValueArr);
    } catch (error) {
      console.log('AsyncStorage.setMultiple', error);
    }
  },
  removeMultiple: async function (keyArr) { // 批量删除
    //  keyArr = ['@MyApp_user', '@MyApp_key']
    try {
      await AsyncStorage.multiRemove(keyArr);
    } catch (error) {
      console.log('AsyncStorage.removeMultiple', error);
    }
  },
  clear: async function () {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('AsyncStorage.clear', error);
    }
  },
  getAllKeys: async function () {
    try {
      return await AsyncStorage.getAllKeys(); // ['@MyApp_user', '@MyApp_key']
    } catch (error) {
      console.log('AsyncStorage.getAllKeys', error);
    }
  },
}

export default _AsyncStorage;
