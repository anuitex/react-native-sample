import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { chatRoomComponent } from '../../ui/screens/chatScreen/components/chatRoom';
import { ChatsListScreen } from '../../ui/screens/chatsScreen';


const Stack = createStackNavigator();

export const ChatStackNavigation = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="chats" component={ChatsListScreen} />
            <Stack.Screen name="chatRoom" component={chatRoomComponent} initialParams={{}}/>
        </Stack.Navigator>
    )
}