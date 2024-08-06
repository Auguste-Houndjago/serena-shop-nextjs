# stylesheet.creacte
<!-- stylesheet.creacte({
    container:{
        heigh: "10px"
    }
}) -->



#example:

import { StyleSheet, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

const ICON = require('./lock.json');

export default function App() {    
  const playerRef = useRef(null);
  
  useEffect(() => {
      playerRef.current?.playFromBeginning();
  }, [])

  return (
    <View style={styles.container}>
      <Player 
        ref={playerRef} 
        size={96} 
        icon={ ICON }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});