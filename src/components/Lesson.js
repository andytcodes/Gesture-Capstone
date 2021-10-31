/**
 * Page for lesson
 * @author Andy Tran
 */

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
    </>
  );
}