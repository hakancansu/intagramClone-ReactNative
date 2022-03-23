import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Dots, Heart, Share, Bookmark, Comment } from "../../Icons";
import FitImages from "./FitImage";
import ReadMore from "@fawazahmed/react-native-read-more";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function Post({ post }) {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image style={styles.avatar} source={{ uri: post.user.avatar }} />
          <Text style={styles.title}>{post.user.name}</Text>
        </View>

        <Dots size={14} fill="#262626" />
      </View>
      <FitImages src={post.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.action} activeOpacity="0.7">
              <Heart size={24} fill="#222" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} activeOpacity="0.7">
              <Comment size={24} fill="#222" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} activeOpacity="0.7">
              <Share size={24} fill="#222" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity="0.7">
            <Bookmark size={22} fill="#222" />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.likes}>{post.likes} likes</Text>
        </View>

        <ReadMore
          numberOfLines={2}
          seeMoreStyle={{ color: "#999" }}
          seeLessStyle={{ color: "#999" }}
          seeMoreText="more"
          wrapperStyle={{marginBottom:7}}
        >
          <Text>
            <Text style={styles.user}>{post.user.name}</Text>
            {`  `}
            {post.description}
          </Text>
        </ReadMore>
        {post.comments > 0 && (
          <TouchableOpacity style={{ paddingBottom: 7 }} activeOpacity="0.7">
            <Text style={styles.comments}>
              View all {post.comments} comments
            </Text>
          </TouchableOpacity>
        )}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
          <Text style={styles.translation}>see Translation</Text>
        </View>
      </View>
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({

  post: {
    marginBottom:30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 49,
    paddingHorizontal: 15,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },

  content: {
    paddingHorizontal: 15,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
  },
  leftActions: {
    flexDirection: "row",
  },
  action: {
    marginRight: 12,
  },
  likes: {
    fontWeight: "bold",
  },
  user: {
    fontWeight: "bold",
  },
  comments: {
    opacity: 0.5,
    fontWeight: "500",
  },
  date: {
    fontSize: 13,
    opacity: 0.5,
  },
  translation: {
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
