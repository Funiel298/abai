'use client'

import { useEffect } from 'react';
import { sections } from '../const/sections.js';

export default function Questions({ setSubject, subject }: any) {
  return (
    <div className="w-2/3 p-5 m-3 rounded-2xl bg-white shadow-lg h-[90vh]">
      {sections[subject]?.map(({ name, exercises }, sectionIndex) => (
        <div key={sectionIndex} className="mt-4 bg-gray-200 p-3 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold">{name}</h2>

          <div className='flex flex-row justify-items-start'>
            {exercises.map(({ label, options }, exerciseIndex) => (
              <div key={exerciseIndex} className="flex mx-4 items-center mt-2">
                <label className="mr-2 font-semibold">{label}:</label>
                <select className="p-2 rounded-xl bg-gray-100 outline-none border">
                  {options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                
              </div>
              
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
