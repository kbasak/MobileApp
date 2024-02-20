import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PieChart from 'react-native-pie-chart';

const PieChartComponent = ({ details }) => {
    const widthAndHeight = 80
  const series = []
  const sliceColor = []
  details.map(details=>{
    series.push(details.balance)
    sliceColor.push(details.color)
  })
    

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