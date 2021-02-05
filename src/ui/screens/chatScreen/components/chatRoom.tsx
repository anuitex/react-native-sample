import React, { useState, useCallback, useEffect } from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import io from 'socket.io-client';

export function chatRoomComponent({route}: any) {
  const pattern = require('../../../../../public/chat-bg.jpg');

  const [messages, setMessages] = useState([]);
  
  const socket = io.connect('http://172.18.63.81:3001');

  // useEffect(() => {
  //   socket.on("chatMessage", (message: string) => {
  //       setMessages([...messages, message]);
  //   })
    
  // });

  useEffect(() => {
    setMessages([
      {
        _id: route.params?.id,
        text: route.params?.text,
        createdAt: route.params?.createdAt,
        user: {
          _id: route.params?.user.id,
          name: route.params?.user.name,
          avatar: route.params?.user.avatar,
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    socket.emit("chat message", messages)
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  
  
  return (
    <View style={styles.chatContiner}>
        <ImageBackground source={pattern} style={styles.chatContiner}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 123,
                }}
            />
        </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
    chatContiner: {
        flex: 1,
        backgroundColor: '#6d44bd',
        paddingTop: 20
    }
})