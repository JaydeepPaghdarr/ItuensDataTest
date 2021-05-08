import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from "react-redux";

class HomeDetail extends Component {

  render() {
    return (
      <View style={styles.mainView}>
        <Image style={styles.imageStyle} resizeMode="contain" source={{ uri: this.props.navigation.state.params.itemData.artworkUrl100 }}></Image>
        <Text style={styles.titleText}>WrapperType: {this.props.navigation.state.params.itemData.wrapperType}</Text>
        <Text style={styles.titleText}>Kind: {this.props.navigation.state.params.itemData.kind}</Text>
        <Text style={styles.titleText}>CollectionPrice: {this.props.navigation.state.params.itemData.collectionPrice ? "$" + this.props.navigation.state.params.itemData.collectionPrice : this.props.navigation.state.params.itemData.collectionPrice}</Text>
        <Text style={styles.titleText}>TrackPrice: {this.props.navigation.state.params.itemData.trackPrice ? "$" + this.props.navigation.state.params.itemData.trackPrice : this.props.navigation.state.params.itemData.trackPrice}</Text>
        <Text style={styles.titleText}>Currency: {this.props.navigation.state.params.itemData.currency}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainView: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageStyle: {
    width: "100%",
    height: "20%",
    marginTop: 20
  },
  titleText: {
    marginTop: 10,
    marginLeft: 10,
    width: "90%"
  }

});

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDetail);