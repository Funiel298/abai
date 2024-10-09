'use client'

import { useEffect, useState } from "react";
import Settings from "./components/settings";
import Questions from "./components/questions";

export default function Home() {

  const [grade, setGrade] = useState(6)
  const [subject, setSubject] = useState(0)

  // useEffect(()=>{
  //   console.log(grade)
  // },[grade])



  return (
    <div className="bg-gray-300 flex flex-row">
        <Settings grade={grade} setGrade={setGrade} setSubject={setSubject} />
        <Questions grade={grade} setGrade={setGrade} setSubject={setSubject} subject={subject} />
    </div>
  );
}
