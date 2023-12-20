import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import { Camera } from 'expo-camera'
import * as MediaLibrary from "expo-media-library";
import PrimaryButton from '../../components/PrimaryButton';

export default function CameraView() {
  const [startCamera, setStartCamera] = useState(true);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === 'granted') {
        // start the camera
        setStartCamera(true)
      } else {
        Alert.alert('Access denied')
      }
    })();
  }, []);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      // start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }

  const __takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  const __retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    __startCamera()
  }

  const __saveImage = async (uri) => {
    try {
      // Request device storage access permission
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        // Save image to media library
        await MediaLibrary.saveToLibraryAsync(uri);
        console.log("Image successfully saved");
        console.log('Photo Location', capturedImage)
      }
      setStartCamera(true)
      setPreviewVisible(false)
      setCapturedImage(null)
    } catch (error) {
      console.log(error);
    }
  };


  let camera = Camera;
  return (
    <>
      {startCamera && (
        (previewVisible && capturedImage) ? (
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              width: '100%',
              height: '100%'
            }}
          >
            <ImageBackground
              source={{ uri: capturedImage && capturedImage.uri }}
              style={{
                flex: 1
              }}
            />
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
              <View>
                <PrimaryButton onPress={__retakePicture}>Retake</PrimaryButton>
              </View>
              <View>
                <PrimaryButton onPress={__saveImage.bind(this, capturedImage.uri)}>Save</PrimaryButton>
              </View>
            </View>
          </View>
        ) : (
          <Camera
            style={{ flex: 1, width: "100%" }}
            ref={(r) => {
              camera = r
            }}
          >
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                flexDirection: 'row',
                flex: 1,
                width: '100%',
                padding: 20,
                justifyContent: 'space-between'
              }}
            >
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity
                  onPress={__takePicture}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: '#fff'
                  }}
                />
              </View>
            </View>
          </Camera>))
        }
       
    </>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})