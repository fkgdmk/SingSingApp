import React from 'react';
import { StyleSheet, Text, View, Button, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';
import UpperSectionText from './UpperSectionText';
import LowerSectionText from './LowerSectionText';
import HorizontalLine from './HorizontalLine';
type Song = { title: string, artist: string, lyricPartOne: string, lyricPartTwo: string }
type state = { isLoading: boolean, songsArr: Array<Song>, song: Song }

export default class App extends React.Component<{}, state> {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      songsArr: [],
      song: null
    }
  }

  componentDidMount() {
    this.getSongsFormAPI().then((songs: Array<Song>) => {
      console.log(songs);
      const randomSong: Song = this.getRandomSong(songs);
      this.setState({ songsArr: songs, song: randomSong, isLoading: false, });
    })
  }

  private changeSong = () => {
    const randomSong: Song = this.getRandomSong(this.state.songsArr);
    this.setState({ song: randomSong, isLoading: false });
  }

  private getRandomSong(arr: Array<Song>): Song {
    const song : Song = arr[Math.floor(Math.random() * arr.length)];
    song.lyricPartOne = this.createNewLines(song.lyricPartOne);
    song.lyricPartTwo = this.createNewLines(song.lyricPartTwo);
    return song;
  }

  private createNewLines(lyricPart: string){
    return lyricPart.replace(/-/g, '\n\n');
  }

  private getSongsFormAPI(): any {
    return fetch('http://192.168.43.245:3000/songs')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <TouchableOpacity activeOpacity={.8} style={styles.container} onPress={() => this.changeSong()}>
          <View style={styles.upperSection}>
            <UpperSectionText>{this.state.song.lyricPartOne}</UpperSectionText> 
            <HorizontalLine color={'#ff8080'} margin={25}></HorizontalLine>
            <UpperSectionText>{this.state.song.lyricPartTwo}</UpperSectionText>
          </View>
          <View style={styles.lowerSection}>
            <LowerSectionText>{this.state.song.title}</LowerSectionText> 
            <HorizontalLine color={'#ffba92'} margin={15}></HorizontalLine>   
            <LowerSectionText>{this.state.song.artist}</LowerSectionText> 
            {/* <Button title='New song' onPress={() => this.changeSong()}></Button> */}
          </View> 
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffba92',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperSection: {
    alignItems: 'center',
    height: '70%',
    justifyContent: 'center'
  },
  lowerSection: {
    backgroundColor: '#ff8080',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    paddingTop: 30
  },
  hr: {
    borderWidth: 0.5,
    borderColor: '#ff8080',
    width: 100,
    margin: 30
  }
  
});
