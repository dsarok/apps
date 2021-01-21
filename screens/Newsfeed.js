import React ,{useState,useEffect}from "react";
import { View} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator, Colors } from 'react-native-paper';
import Cardo from "./Card";
export default function Newsfeed({route,navigation}) {
  const topic=route.params.topic
  const [articles, setArticles] = useState([]);
  const[Loading,setLoading]=useState(true)
  const urrl=`http://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=a0723c16d27a496c94a3dbb141ea0470`
  useEffect(()=>{
    fetch(urrl)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.articles;
    })
    .then( articles  => {
      setArticles(articles);
      setLoading(false);
    })
    .catch( error => {
      console.error(error);
    });

  } , []);
  if (Loading) {
    return(
      <View
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <ActivityIndicator animating={true} color={Colors.blueGrey700} size="large"/>
      </View>
      
    )
  }
  return(
    <View style={{padding:10}}>
    <FlatList
      data={articles}
      showsVerticalScrollIndicator={false}
      initialNumToRender={6}
      renderItem={({item})=>{
        return(
        
          <Cardo
          image={item.urlToImage}
          title={item.title}
          newssource={item.source.name}
          time={item.publishedAt}
          description={item.description}
          fullurl={item.url}
        />
       
        )
      }}
      keyExtractor={(items,index)=>index.toString()}
    />
      
      </View>
  )
}