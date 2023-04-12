import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import theme from '../Styles/GlobalStyles';
import {WhiteButtons} from '../shared/Buttons';

const nations = [
  {
    name: 'Gotlands nation',
    imageUri: 'https://gotlandsnation.se/img/logo_large.jpg'
    
  },
  {
    name: 'Gästrike-Hälsning nation',
    imageUri: 'https://nationsguiden.se/mind_content/media/gastrikehalsinge.png'
    
  },

  {
    name: 'Göteborgs nation',
    imageUri: 'https://nationsguiden.se/mind_content/media/goteborgs_0.jpg'
    
  },

  {
    name: 'Kalmar nation',
    imageUri: 'https://uppsalastudent.com/wordpress/uploads/2017/11/klamar-1.png'
    
  },

  {
    name: 'Norrlands nation',
    imageUri: 'https://www.nationsgardarna.se/wp-content/uploads/Norrlands-logo-icon-color-298x300.png'
    
  },

  {
    name: 'Smålands nation',
    imageUri: 'https://smalands.nu/wp-content/uploads/2021/01/smalands-logo.png'
    
  },

  {
    name: 'Stockholms nation',
    imageUri: 'https://www.stockholmsnation.se/wp-content/uploads/2016/10/StErik-square.png'
    
  },

  {
    name: 'Södermanlands-Nerikes nation',
    imageUri: 'https://yt3.googleusercontent.com/ytc/AL5GRJUtSPrK5vKibGcqnYWNMcCDvDDckYRePaC01azc=s900-c-k-c0x00ffffff-no-rj'
    
  },

  {
    name: 'Uplands nation',
    imageUri: 'https://yt3.googleusercontent.com/ytc/AL5GRJVshz3ckwtWX-k-vSlJ_Fv2p4mNNQmVNhuYqs3DBg=s900-c-k-c0x00ffffff-no-rj'
    
  },

  {
    name: 'Värmlands nation',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAnDpIVKeMIzeFXRapOqpnirzMQJ9JGQl1jA&usqp=CAU'
    
  },

  {
    name: 'Västgöta nation',
    imageUri: 'https://images.squarespace-cdn.com/content/v1/5b27d63bcef3724caf036466/1536572782586-5JV70ASHUHCKDR8981QV/2013.png'
    
  },

  {
    name: 'Västmanlands-Dala nation',
    imageUri: 'https://www.v-dala.se/wp-content/themes/vdala/images/logotyp/V-Dala.png'
    
  },

  {
    name: 'Östgöta nation',
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Östergötlands_vapen_med_krona.JPG/250px-Östergötlands_vapen_med_krona.JPG'
    
  },
];

export default function OverViewScreen({navigation}) {
  const pressHandler = () => {
    navigation.navigate('NationView');
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.backgroundColor}}>
      <ScrollView>
        <View>
          {nations.map((nation, index) => (
            <View style={styles.nationContainer} key={index}>
              <Image source={{uri: nation.imageUri}} style={styles.image} />
              <WhiteButtons
                text={nation.name}
                onPress={() => pressHandler('Map')}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({

  nationContainer: {
   flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'white',
    width: '80%',
    marginLeft: 30
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 20


  },
});