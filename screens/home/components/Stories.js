import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import stories from "../../../data/stories";
import { LinearGradient } from "expo-linear-gradient";
function Stories() {
  return (
   <View style={styles.stories}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {stories.map((story) => (
        <View key={story.id} style={styles.story}>
            <LinearGradient colors={["#DE0046", "#F7A34B"]} style={styles.cover}>
          <Image source={{ uri: story.user.avatar }} style={styles.avatar} />
          
        </LinearGradient>
        <Text style={styles.userName} numberOfLines={1}>{story.user.name}</Text>
        </View>
        
      ))}
      
    </ScrollView>
   </View>
  );
}
export default Stories;

const styles = StyleSheet.create({
    stories: {
        paddingVertical:10,
       
    },
    story:{
        width:67,
        marginHorizontal:8,
    },

  cover: {
    width: 65,
    height: 65,
    borderRadius: 33.5,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:5,
    
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth:3,
    borderColor:'#fff',
    borderRadius: 60,
  },
  userName: {
      fontSize:12,
  }
});
