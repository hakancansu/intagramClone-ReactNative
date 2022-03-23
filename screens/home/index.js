import { StyleSheet, View, ScrollView, Text } from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";
import posts from "../../data/post";
import Post from "../../components/shared/Post";

function Divider() {
  return <View style={{height:0.5,backgroundColor:'#DADADA'}} />
}

function Home() {
  return (
    <>
      <Header />
      <ScrollView stickyHeaderIndices={[1]} style={styles.container}>
        <Stories />
        <Divider />
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </ScrollView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
