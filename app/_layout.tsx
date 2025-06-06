import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout(){
    return(
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen 
                    name="index"
                    options={{title: "Dollar (USA)"}}
                />

                <Drawer.Screen 
                    name="eur"
                    options={{title: "Euro (EUR)"}}
                />
            </Drawer>
        </GestureHandlerRootView>       
    )
}