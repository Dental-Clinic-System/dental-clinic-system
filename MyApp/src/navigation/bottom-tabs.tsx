import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppointmentSvg, HomeSvg, MedicineSvg, ProfileSvg } from '../components/svg'
const { width } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

const Tab_Icons: any = {
    Нүүр: AppointmentSvg,
    Эм: HomeSvg,
    Цаг_Aвалт: MedicineSvg,
    Профайл: ProfileSvg
}

export const BottomTabBar: React.FC<any> = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    const styles = StyleSheet.create({
        navigation: {
            flexDirection: 'row',
            height: 80,
            width: width,
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOffset: {
                width: 3,
                height: 3,
            },
            shadowOpacity: 0.27,
            borderRadius: 15,
        },
        element: {
            width: width / 4,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.navigation}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const CustomIcon = Tab_Icons[route.name];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.element}>
                            <CustomIcon color={isFocused ? '#1EA6D6' : '#181725'} />
                            <Text style={{ color: isFocused ? '#1EA6D6' : '#181725', marginTop: 5 }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

<Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
</Tab.Navigator>