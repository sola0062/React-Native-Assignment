import { View, Text, Image } from "react-native";
import styles from "../theme/styles";

export default function ListItem({ item }) {
  return (
    <View>
      <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.name.first}</Text>
        <Text style={styles.name}>{item.name.last}</Text>
      </View>
    </View>
  );
}
