import { FlatList, Text, View, StyleSheet } from "react-native"
import { useLayoutEffect } from 'react'
import IconButton from "../components/ui/IconButton";
import { useEffect } from "react";
import { getDevices } from "../util/NetworkUtil";
import { useState } from "react";
import { GlobalStyles } from "../colors/colors";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from "../store/cartItems";

function MobileList({ devices, navigation }) {

    const [deviceList, setDeviceList] = useState([])

    const dispatch = useDispatch()

    function headerButtonPressHandler() {
        navigation.navigate('Cart')
    }


    useEffect(() => {
        let response = null;
        async function getMobileDeviceList() {
            response = await getDevices()
            console.log(response)
            setDeviceList(response)
        }
        getMobileDeviceList()
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        name="cart-outline"
                        color="white"
                        size={32}
                        onPress={headerButtonPressHandler}
                    />
                );
            },
        });
    }, [navigation, headerButtonPressHandler]);

    function onAddToCartPress(mobileDeviceId) {
        console.log("Mobile device added to cart" + mobileDeviceId)
        dispatch(addToCart({
            id: mobileDeviceId
        }))
    }

    function deviceListItem({ item }) {
        return (
            <View style={styles.container}>
                <View style={[styles.detailContainer, { flex: 1 }]}>
                    <Text>{item.id}</Text>
                    <Text>{item.name}</Text>
                </View>
                <IconButton name="cart-plus" size={24} color='white' onPress={onAddToCartPress.bind(this, item.id)} />
            </View>
        )
    }

    return <FlatList data={deviceList} renderItem={(item) => deviceListItem(item)} keyExtractor={(item) => item.id} />
}

export default MobileList

const styles = StyleSheet.create({
    detailContainer: {
        margin: 10,
        padding: 10,
    },
    container: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary50
    }
})