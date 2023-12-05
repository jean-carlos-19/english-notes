import * as WebBrowser from 'expo-web-browser';
import { useCallback } from 'react';
import { data } from '@/constants';
const content = data.footer;
const useProfile = () => {
 const handleProfile = useCallback(async () => {
  try {
   await WebBrowser.openBrowserAsync(content.url);
  } catch (error) {
   console.log(error);
  }
 }, []);
 return { handleProfile };
};
export { useProfile };
