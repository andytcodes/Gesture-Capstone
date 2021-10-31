/**
 * Page for lesson
 * @author Andy Tran
 */
import React from "react";
import { useParams } from "react-router";
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
      <h1 className="text-primary text-center text-4xl font-bold underline mb-10 mt-12">{l}</h1>

      <div className="text-center mx-4">
        <h1 className="text-neutral text-center rounded-lg border-info border-opacity-30 border-2 inline-block p-4 shadow-lg">
          The number 0 in ASL is done by bending all you fingers half way, meeting the thumb.
        </h1>
      </div>

      <div className="grid grid-cols-2 px-6 gap-3 text-neutral">
        <div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}