import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA_PREFIX = "basket::";

export async function storeData<T>(key: string, value: T) {
  try {
    await AsyncStorage.setItem(`${DATA_PREFIX}${key}`, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export async function retrieveData<T>(key: string) {
  try {
    const value = await AsyncStorage.getItem(`${DATA_PREFIX}${key}`);

    return value ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteData(key: string) {
  try {
    return await AsyncStorage.removeItem(`${DATA_PREFIX}${key}`);
  } catch (error) {
    console.log(error);
  }
}
