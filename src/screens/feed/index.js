import React from 'react';
import { View, StatusBar, FlatList, Image, StyleSheet } from 'react-native';
import { Text, Icon, ListItem, Avatar } from 'react-native-elements';
import _ from 'lodash';
export default class FeedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {
                    id: 1,
                    title: 'Zenwatch 3',
                    text: 'Checkout my latest purchase. Bought the Asus Zenwatch 3 @amazon lightning deals for 15000.',
                    image: '',
                    user: {
                        name: 'Gaurav Ahuja'
                    }
                },
                {
                    id: 2,
                    title: 'Canvas Laugh Club',
                    text: 'Going at comedy club @CanvasLaughClub, Gurugram',
                    image: 'zenwatch.jpeg',
                    user: {
                        name: 'Gagan Nagpal'
                    }
                },
                {
                    id: 3,
                    title: 'Burger Singh',
                    text: 'Enjoying the best burgers @Burger Singh, Rajouri Garden.',
                    image: 'burger.jpeg',
                    user: {
                        name: 'Supriya Singh'
                    }
                },
            ]
        }
    }

    render() {
        const { feed } = this.state;
        return (
            <View
                style={styles.container}>
                <StatusBar
                    hidden
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.30)" />
                <FlatList
                    data={feed}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <ListItem
                                roundAvatar
                                avatar={<Avatar
                                    rounded
                                    medium
                                    source={require('../../images/avatar.jpg')}
                                    title={item.user.name}
                                />}
                                hideChevron
                                key={item.title}
                                title={item.title}
                                subtitle={item.user.name} />
                            <Image
                                style={styles.image}
                                source={require('../../images/zenwatch.jpeg')} />
                            <Text style={styles.itemText}>{item.text}</Text>
                            <View style={styles.actionBar}>
                                <Icon
                                    containerStyle={styles.actionIcon}
                                    size={20}
                                    color='#9e9e9e'
                                    name='heart'
                                    type='material-community' />
                                <Text style={styles.actionText}>779</Text>
                                <Icon
                                    containerStyle={styles.actionIcon}
                                    size={20}
                                    color='#9e9e9e'
                                    name='comment'
                                    type='material-community' />
                                <Text style={styles.actionText}>25</Text>
                                <Icon
                                    containerStyle={styles.actionIcon}
                                    size={20}
                                    color='#9e9e9e'
                                    name='eye'
                                    type='material-community' />
                                <Text style={styles.actionText}>8,292</Text>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#e0e0e0'}} />
                            <View style={{ height: 1, backgroundColor: '#eeeeee'}} />
                            <View style={{ height: 1, backgroundColor: '#eeeeee'}} />
                        </View>
                    )} />
            </View>
        );
    }
}

const styles = new StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5'
    },
    card: {
        marginVertical: 6,
        backgroundColor: 'white',
        // borderBottomWidth: 2,
        // borderBottomColor: '#e0e0e0'
    },
    cardHeader: {
        paddingVertical: 5,
    },
    itemText: {
        marginTop: 5,
        fontSize: 16,
        marginHorizontal: 10,
    },
    image: {
        width: '100%'
    },
    actionItem: {
        alignItems: 'center',
    },
    actionIcon: {
        marginRight: 6,
    },
    actionText: {
        marginRight: 14,
        fontWeight: 'bold'
    },
    actionBar: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 14,
    }
})

// e0e0e0
// eeeee