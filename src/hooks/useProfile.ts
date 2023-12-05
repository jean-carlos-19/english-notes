import * as WebBrowser from 'expo-web-browser';
import { useCallback } from 'react';

const content = Object.freeze({
 homepage: 'https://piguavesof.com',
});
const useProfile = () => {
 const handleProfile = useCallback(async () => {
  try {
   await WebBrowser.openBrowserAsync(content.homepage);
  } catch (error) {
   console.log(error);
  }
 }, []);
 return { handleProfile };
};
export { useProfile };
