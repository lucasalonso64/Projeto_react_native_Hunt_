//import React, { Component } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import React from 'react';
//import { WebView } from 'react-native';
//import { WebView } from 'react-native-webview';

//import { webView } from 'react-native';
const Product = ({ navigation }) =>  (
    <WebView source={{ uri: navigation.state.params.product.url }} />
);

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title
});

export default Product;