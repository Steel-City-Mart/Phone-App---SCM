import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/Common/HeaderButton'
import Colors from '../Constants/GlobalConstants'


const OfferScreen = (props) => {

    OfferScreen.navigationOptions = {
    headerTitle : 'Offer',
    headerStyle:{
        backgroundColor:Colors.primary
    }
}

  return (
    <View style={styles.container}>
        <Text>Welcome to Offer Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
container:{

}
});

export default OfferScreen;