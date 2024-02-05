import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PieChart from 'react-native-pie-chart';

const PieChartComponent = () => {
    const widthAndHeight = 75
    const series = [20, 20, 20, 20, 20]
    const sliceColor = ['#1f73db', '#792b0e', '#ff6600', '#e5a800', '#36c00f']

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.6}
            coverFill={'#FFF'}
          />
        </View>
      </ScrollView>
    );
}
export default PieChartComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    }
  })