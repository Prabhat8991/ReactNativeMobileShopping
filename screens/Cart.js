import { FlatList, StyleSheet, View, Text } from "react-native"
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { GlobalStyles } from "../colors/colors"
import { getDevices } from "../util/NetworkUtil"

function Cart() {

    const cartMobiles = useSelector((state) => state.cartItems.ids)

    const [deviceList, setDeviceList] = useState([])


    function deviceListItem({ item }) {
        return (
            <View style={styles.container}>
                <View style={[styles.detailContainer, { flex: 1 }]}>
                    <Text>{item.id}</Text>
                    <Text>{item.name}</Text>
                </View>
            </View>
        )
    }

    useEffect(() => {
        let response = null;
        async function getMobileDeviceList() {
            response = await getDevices()
            console.log("Response from cart " + response)
            console.log(response)
            setDeviceList(response.filter((item) => cartMobiles.includes(item.id)))
        }
        getMobileDeviceList()
    }, [])


    return <FlatList data={deviceList} keyExtractor={(item) => item.id} renderItem={deviceListItem} />
}

export default Cart

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