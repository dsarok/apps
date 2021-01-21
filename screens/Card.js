import * as React from 'react';
import {Modal, View} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { WebView } from 'react-native-webview';


const LeftContent = props => <Avatar.Icon {...props} icon="newspaper" />

export default function Cardo (props) {
    const [showmodal,setmodal]=React.useState('false')
    return(
  <Card style={{borderRadius:30,borderColor:'black',marginBottom:10} }elevation={10} >
  
    <Card.Title title={props.newssource} subtitle={props.time} left={LeftContent} />
   
    <Card.Cover source={{ uri: props.image }} />
     <Card.Content>
      <Title>{props.title}</Title>
      <Paragraph>{props.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={()=>{setmodal(true);}}>Full story</Button>
     
    </Card.Actions>
    <Modal
    animationType="slide"
    visible={showmodal}>
    <View style={{flex:1}}>
   <Button icon={{ source: "arrow-right-bold", direction: 'rtl' }} onPress={()=>setmodal(false)}>
  back
</Button>
    <WebView source={{ uri: props.fullurl }}  /></View>
    
     
    </Modal>
   
  </Card>
);}