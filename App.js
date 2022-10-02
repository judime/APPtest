import { Button, StyleSheet, Text, TextInput, button, View } from 'react-native';

import React,{useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  View,
} from 'react-native'

export default function App() {
  return (
    <View style={{pading: 30}}>
      <View>
        <TextInput placeholder='Item de lista'  
          style = {{
            borderBottomoColor: 'black', 
            borderBottomWidth:1}}/>
        <Button title='Add' onPress={()=> console.warn('Hola')}/>

      </View>
      <view style = {styles.inputContainer}>
        <TextInput
          placeholder='Item de lista'
          style = {styles.input}
          onChangeText= {onHandlerChangeItem}
          value={textItem}
          />
        <Button title='ADD' onPress={add}/>

      </view>
    
      <view>
        {DataTransferItemList.map(item =><view style={styles.itemsList}><Text>{item.value}</Text></view>)}
      </view>
      <FlatList
        data={itemList}
        renderItem={data =>(
          <TouchableOpacity onPress={onHanlerDelete.bind(this, data.item.id)}>
            <view style={styles.itemList}>
              <Text>{data.item.value}</Text>
            </view>
          </TouchableOpacity>
        )}
        keyExtractor ={(item) => item.id}
      />
      <Modal
      animationType='slide'
      visible = {modalVisible}
      >
        <view style ={styles.modalTitle}>
          <text>Mi Modal</text>
        </view>
        <view style ={styles.modalMessage}>
          <text>¿esta seguro que desea borrar?</text>
        </view>
        <view style ={styles.modalMessage}>
          <text style={styles.modalItem}>{itemSelected.value}</text>
        </view>
        <view style ={styles.modalButton}>
          <button onPress ={onHandlerDelete.bind(this, itemSelected.id)} tittle ="confirm"/>
        </view>
      </Modal>
    </View>
  
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  input: {
    width: 200,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});

const handlerConfirmInput = () => {
  const choseNumber = parseInt(enteredValue)
  if(choseNumber === NAN || chosenNumber > 99) return
  setConfirmed (true)
  setSelctedNumber(ParseInt(enteredValue))
  setEnteredValue('')
}

const confirmedOutput = confirmed ? <text> Numero elegido: {selectedNumber}</text> : null

