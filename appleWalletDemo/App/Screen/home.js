import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from "react-redux";
import apiCall from "../Action/actionCreator";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    componentDidMount() {
        this.props
            .apiCall("https://itunes.apple.com/search?term=Michael+jackson")
            .then(() => {
                const data = this.props.data;
                this.setState({
                    data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderData = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.flatlistItemView} onPress={() =>
                this.props.navigation.navigate("HomeDetail", { itemData: item })
            }>
                <View style={styles.contetntView}>
                    <Image style={styles.imageStyle} resizeMode="contain" source={{ uri: item.artworkUrl100 }}></Image>
                    <View style={styles.textViewStyle}>
                        <Text style={[styles.titleText, { marginTop: 0 }]}>ArtistName - {item.artistName}</Text>
                        <Text style={styles.titleText}>CollectionName - {item.collectionName}</Text>
                        <Text style={styles.titleText}>TrackName - {item.trackName}</Text>
                    </View>

                </View>
                <View style={styles.lineStyle} />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.mainView}>
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderData}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    flatlistItemView: {
        width: "100%",
        marginTop: 5,
    },
    contetntView: {
        flexDirection: "row", 
        marginLeft: 5 
    },
    textViewStyle:{
        width: "70%"
    },
    titleText: {
        marginLeft: 5,
        marginTop: 5
    },
    imageStyle: { 
        width: 80 
    },
    lineStyle: {
        height: 1,
        backgroundColor: "gray",
        width: "100%",
        marginTop: 5
    }

});

const mapDispatchToProps = dispatch => ({
    apiCall: url => dispatch(apiCall(url))
});

const mapStateToProps = state => ({
    data: state.apiReducer.data,
    error: state.apiReducer.error,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
