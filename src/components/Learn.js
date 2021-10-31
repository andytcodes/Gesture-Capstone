import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app from "../firebase";
import Subjects from "./Subjects";
import NavBar from "./NavBar";

export default function Learn () {

  return (
    <>
    <NavBar page="learn"/>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-4 gap-3">
      <Subjects/>
    </div>
    </>
  )
}