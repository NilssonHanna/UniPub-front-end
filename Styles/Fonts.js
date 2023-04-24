import React, { useState, useEffect } from 'react';
import { useFonts, Chewy_400Regular } from '@expo-google-fonts/chewy';

export default function Fonts() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
    useEffect(() => {
      async function loadFonts() {
        await useFonts({
          Chewy_400Regular,
        });
        setFontsLoaded(true);
      }
      loadFonts();
    }, []);
  
    if (!fontsLoaded) {
      return null;
    }
  }