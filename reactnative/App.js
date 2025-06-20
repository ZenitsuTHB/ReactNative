import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {

  const [myText, setMyText] = useState('hello world');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <TextInput onChangeText={text => setMyText(text)} style={{ backgroundColor: 'red' }} />
        {/*<Text>{myText}</Text>*/}
        <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text><Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>  <Text>lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}