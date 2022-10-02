import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { useState } from "react";
import { Keyboard } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
    const [TextItem, setTextItem] = useState('')
    const [itemsList, setItemList] = usestate ([])

    const[itemSelected, setItemSelected] = usestate({});
    const[modalVisible, setModalVisible] = usestate (false);

    const onHandlerChangeItem = (t) => setTextItem(t) 

    const add = () => {
        setItemList( currentItems =>[
            {id:Math.random().toString(), value:TextItem}
        ])
        setTextItem('')
    }

    const onHanlerDelete = id => {
        setItemList(currentItems => currentItems.filter(item => item.id !== id))
        setItemSelected({})
        setModalVisible(!modalVisible)
    }

    const onHanderlerModal = id =>{ (parameter) 
        setItemSelected(itemList.filter(item => item.id === id)[0])
        setModalVisible(!modalVisible)
    }

    const StartGameScreen = () => {

        const[enteredValue, setEnteredValue] = usestate("");

        const handlerInputNumber = (text) => {
            setEnteredValue (text.replace(/[^0-9]/g),"");
        };

        const handlerResetInput = setEnteredValue ('')

        return (
            <TouchableWithouthFeedback onPress = {() => {
                Keyboard.dismiss()}}>
            
                <view style={={styles.buttonContainer}>
                    <view style = {styles.button}>
                    <button
                    title="limpiar"
                    onPress = {handlerResetInput}
                    color={Colors.accent}/>
                    <view/>
                <view/>

            </TouchableWithouthFeedback>
        )
    }
}