/**
 * @author Andy Tran
 */

import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 
import a_img from './images/Alphabets/a.PNG';
import b_img from './images/Alphabets/b.PNG';
import c_img from './images/Alphabets/c.PNG';
import d_img from './images/Alphabets/d.PNG';
import e_img from './images/Alphabets/e.PNG';
import ilu_img from './images/Alphabets/iloveyou.png';


// ----- A -----
const alphabet_A_Gesture = new GestureDescription('A');
//Thumb
alphabet_A_Gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
alphabet_A_Gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.2);
//Index
alphabet_A_Gesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.9);
//Middle
alphabet_A_Gesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9);
//Ring
alphabet_A_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9);
//Pinky
alphabet_A_Gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9);

// ----- B -----
const alphabet_B_Gesture = new GestureDescription('B');
//Thumb
alphabet_B_Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
//Index
alphabet_B_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
//Middle
alphabet_B_Gesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
//Ring
alphabet_B_Gesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
//Pinky
alphabet_B_Gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// ----- C -----
const alphabet_C_Gesture = new GestureDescription('C');
//Thumb
alphabet_C_Gesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
//Index
alphabet_C_Gesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
//Middle
alphabet_C_Gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
//Ring
alphabet_C_Gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
//Pinky
alphabet_C_Gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

// ----- D -----
const alphabet_D_Gesture = new GestureDescription('D');
//Thumb
alphabet_D_Gesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
//Index
alphabet_D_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
alphabet_D_Gesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);
alphabet_D_Gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);
//Middle
alphabet_D_Gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
//Ring
alphabet_D_Gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
//Pinky
alphabet_D_Gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);

// ----- E -----
const alphabet_E_Gesture = new GestureDescription('E');
//Thumb
alphabet_E_Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
//Index
alphabet_E_Gesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
//Middle
alphabet_E_Gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
//Ring
alphabet_E_Gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
//Pinky
alphabet_E_Gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);

// ----- ILU -----
export const ILU_Gesture = new GestureDescription('ILOVEYOU');
//Thumb
ILU_Gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ILU_Gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);
//Index
ILU_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
//Middle
ILU_Gesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
//Ring
ILU_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
//Pinky
ILU_Gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

 export default{
  a_img,
  b_img,
  c_img,
  d_img,
  e_img,
  alphabet_A_Gesture,
  alphabet_B_Gesture,
  alphabet_C_Gesture,
  alphabet_D_Gesture,
  alphabet_E_Gesture,
  ILU_Gesture,
  ilu_img
 }