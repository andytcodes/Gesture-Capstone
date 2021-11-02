import React, {useRef, useState} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from '../gestureUtils';
import * as fp from "fingerpose";
import NavBar from './NavBar';
import alphabet from "../components/GestureDefinitions/AlphabetDefinitions";

export default function Gesture(){

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //Gesture Images
  const [pic, setPic] = useState([]);
  const images = {
    A: alphabet.a_img,
    B: alphabet.b_img,
    C: alphabet.c_img,
    D: alphabet.d_img,
    E: alphabet.e_img
  };

  //load Handpose model
  const runHandpose = async () =>{

    const net = await handpose.load();
    console.log("Handpose model loaded.");

    //loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  }

  const detect = async (net) =>{
    // Check data is available
    if(typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4)
      {
        // Get video properties
        const video = webcamRef.current.video;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        // Set video height and width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        
        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Make Detections
        const hand = await net.estimateHands(video);
        //console.log(hand);

        //Gesture Detection
        if (hand.length > 0) {
          const GE = new fp.GestureEstimator([
            //Adding custom gestures
            alphabet.alphabet_A_Gesture,
            alphabet.alphabet_B_Gesture,
            alphabet.alphabet_C_Gesture,
            alphabet.alphabet_D_Gesture,
            alphabet.alphabet_E_Gesture
          ]);

          const gesture = await GE.estimate(hand[0].landmarks, 4);

          if (gesture.gestures !== undefined && gesture.gestures.length > 0) { 
            console.log(gesture.gestures);

            const confidence = gesture.gestures.map(
              (prediction) => prediction.score
            );

            const maxConfidence = confidence.indexOf(
              Math.max.apply(null, confidence)
            );
            
            console.log(maxConfidence);

            setPic(gesture.gestures[maxConfidence].name);
            console.log(pic);
          }
        }

        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx); //from utilities
      }

  }

  runHandpose();

  return(
    <>
      <NavBar page="gesture"/>
      <div className="grid grid-cols-1">

        <h1 className="text-primary text-center text-4xl font-bold underline mb-10 mt-12">Test Your Form</h1>

        <div className="text-center mb-10 mx-4 md:mx-10">
          <h1 className="text-neutral text-center text-lg text-opacity-80 
          font-semibold rounded-lg border-info border-opacity-30 border-2 inline-block p-4 shadow-lg">
            Test your signing here! Using our built in Gesture recognition system, you can see what you're signing in real time!
          </h1>
        </div>

        <h1 className="text-neutral font-semibold text-center text-xl mb-2">Detected Sign</h1>
        <div className="flex justify-center mb-10">
          <div className="text-neutral bg-neutral-content rounded-lg border-gray-200 border-2 w-56 h-56 p-8 flex justify-center shadow-lg">
            <img src={images[pic]} />
          </div>
        </div>
      
        <div className="flex justify-center">
          <Webcam ref={webcamRef} id="webcam" 
          className="w-7/12 h-7/12 xl:w-4/12 xl:h-4/12 2xl:w-3/12 2xl:h-3/12 absolute rounded-box border-8 border-success border-opacity-50 shadow-xl"/>
          <canvas ref={canvasRef} className="w-7/12 h-7/12 xl:w-4/12 xl:h-4/12 2xl:w-3/12 2xl:h-3/12 absolute"/>
        </div>
      </div>
      
    </>
  );

}