import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
    TouchableOpacity,
  Dimensions,
} from 'react-native';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TaskList = (props) => {
  const [selectedId, setSelectedId] = useState();
  const setDelete = props.setDelete;

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          setDelete(item.id)
          console.log(item.id);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
      <FlatList
        data={props.tasklist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    width: windowWidth
  },
  title: {
    fontSize: 22,
  },
});

export default TaskList;
