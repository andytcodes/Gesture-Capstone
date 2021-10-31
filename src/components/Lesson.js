/**
 * Page for lesson
 * @author Andy Tran
 */

 import { useParams } from "react-router";
 import React, { useState, useEffect} from "react"
 import { useAuth } from "../contexts/AuthContext"
 import { Link, useHistory } from "react-router-dom"
 import app, {db} from "../firebase";
import NavBar from "./NavBar";

export default function Lesson(){

  //Get url params data
  const {s} = useParams();
  const {l} = useParams();
  // console.log(s + " " + l);

  return(
    <>
      <NavBar page="learn"/>

      {/* content */}
      
    </>
  );
}