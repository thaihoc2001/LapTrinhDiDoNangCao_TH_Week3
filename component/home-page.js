import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { Button } from "@react-native-material/core";

export default function HomePage() {
    return (
        <View style={styles.outer}>
            <ImageBackground style={styles.backgroup} source={require('../assets/images/background.png')}>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <View style={styles.logoOuter}>
                        <Image style={styles.logoImage} source={require('../assets/images/circle.png')} />
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: 'center' }} >
                        <Text style={{ paddingBottom: '5%', fontSize: '25', fontWeight: '800', textAlign: "center" }}>
                            GROW {"\n"} YOUR BUSINESS
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", }}>
                        <Text style={{ paddingHorizontal: '5%', fontSize: '15', fontWeight: '600', textAlign: "center" }}>
                            We will help you to grow your bussiness using online server
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", }}>
                        <View style={{ flex: 1 }}>
                            <Button
                                title="LOGIN"
                                color="#E3C000"
                                style = {{marginHorizontal: '18%', paddingVertical: 5}}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button
                                title="SIGN UP"
                                color="#E3C000"
                                style = {{marginHorizontal: '18%', paddingVertical: 5}}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ paddingBottom: '5%', fontSize: '25', fontWeight: '800', textAlign: "center" }}>
                            HOW ME WORK ?
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    outer: {
        flex: 1,
    },
    backgroup: {
        flex: 1
    },
    logoOuter: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    logoImage: {
        marginTop: '10%',
        width: 142,
        height: 142
    }
});