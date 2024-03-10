// Imports
import { SafeAreaView, StyleSheet, Image, View, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={require('./assets/Oval.png')} />
          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>The Octocat</Text>
            <Text style={{ color: 'blue', fontSize: 14, marginVertical: 4 }}
              onPress={() => Linking.openURL('https://github.com/shadmansaalim')}>
              @octocat
            </Text>
            <Text style={{ fontSize: 16 }}>Joined 25 Jan 2011</Text>
          </View>
        </View>

        <View style={styles.bio}>
          <Text style={styles.bioText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, laboriosam? Consectetur odit in commodi dolorum temporibus deleniti ut error, culpa aspernatur? Voluptate, nobis eaque. Minima beatae voluptas libero aliquid quidem.</Text>
        </View>

        <View style={styles.profileData}>
          <View style={styles.data}>
            <Text style={styles.dataTitle}>Repos</Text>
            <Text style={styles.dataCount}>8</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.dataTitle}>Followers</Text>
            <Text style={styles.dataCount}>3938</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.dataTitle}>Following</Text>
            <Text style={styles.dataCount}>8</Text>
          </View>
        </View>

        <View style={styles.aboutSection}>
          <View style={styles.about}>
            <Image style={styles.aboutIcon} source={require('./assets/003-pin.png')} />
            <Text style={styles.aboutText}>San Francisco</Text>
          </View>
          <View style={styles.about}>
            <Image style={styles.aboutIcon} source={require('./assets/002-url.png')} />
            <Text style={styles.aboutText}>https://github.blog/</Text>
          </View>
          <View style={styles.about}>
            <Image style={styles.aboutIcon} source={require('./assets/004-twitter.png')} />
            <Text style={styles.aboutText}>Not Available</Text>
          </View>
          <View style={styles.about}>
            <Image style={styles.aboutIcon} source={require('./assets/001-office-building.png')} />
            <Text style={styles.aboutText}>@github</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7ff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 16,
    padding: 24,
    borderRadius: 12
  },
  header: {
    flexDirection: 'row',
  },
  bio: {
    marginTop: 16,
  },
  bioText: {
    color: 'grey',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 30
  },
  profileData: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f8f7ff',
  },
  data: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataTitle: {
    color: 'gray'
  },
  dataCount: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  aboutSection: {
    marginTop: 36
  },
  about: {
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  aboutIcon: {
    marginRight: 12
  },
  aboutText: {
    color: 'grey'
  }
});
