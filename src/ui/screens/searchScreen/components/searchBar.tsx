import React, { useEffect, useState } from 'react';
import { Platform, View} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { styles } from '../styles/searchBar';
import { useDispatch } from 'react-redux';
import { resetSearchList, searchAction } from '../store/action';


interface SearchBarProps {
  loading: boolean;
}


export const SearchBarComponent = ({loading}: SearchBarProps) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    useEffect(() => {
      if (!value) {
        dispatch(resetSearchList([]))
      } else {
        dispatch(searchAction({value}));  
      }
    }, [value, dispatch])

    const searchHandler = (val: string) => {
        setValue(val);  
    };

    return (
        <View style={styles.searchHeader}>
            <SearchBar
                placeholder="Type here..."
                platform={Platform.OS === 'android' ? 'android' : 'ios'}
                value={value}
                onChangeText={(val) => searchHandler(val)}
                showLoading={loading && true}
                containerStyle={{
                    backgroundColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent',
                    flex: 1
                  }}
                  inputContainerStyle={{
                    backgroundColor: '#EDEDED'
                  }}
                  inputStyle={{
                    backgroundColor: '#EDEDED',
                    borderRadius: 10,
                    color: 'black'
                  }}
            />
        </View>  
    )
}
