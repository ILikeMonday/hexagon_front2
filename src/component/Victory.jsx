import React, { Component } from "react";
import victory from "./img/victoty.png";
import { View, Image, StyleSheet, Animated } from "react-native";

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 800,
    height: 800,
  },
});

export default function Victory() {
  return (
    <div>
      <View style={styles.container}>
        <ImageLoader
          style={styles.image}
          source={{
            uri: victory,
          }}
        />
      </View>
    </div>
  );
}
