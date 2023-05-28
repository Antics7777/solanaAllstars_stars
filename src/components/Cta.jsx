import React from 'react'
import styles, { layout } from "../style";

const Cta = () => {
  return (
    <div id="agenda" className="relative w-full   flex  flex-col shadow-lg mt-4 mb-6 rounded-md text-black text-left">
      <table className={`w-auto bg-blue-gradient rounded-md font-poppins shadow-md  ${layout.paragraph}`}>
        <thead className="">
          <tr className="">
            <th className="text-md px-6 py-3  ">S/N</th>
            <th className="text-md px-6 py-3 ">AGENDA </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" border border-white-100 border-solid border-l-0 border-r-0">
            <th className="text-md px-6 py-3">1</th>
            <th className="text-md px-6 py-3">INTRODUCTION</th>



          </tr>
          <tr className=" border border-solid border-l-0 border-r-0">
            <th className="text-md px-6 py-3">2</th>
            <th className="text-md px-6 py-3">GET TO KNOW EACH OTHER </th>



          </tr>
          <tr className=" border border-solid border-l-0 border-r-0">
            <th className="text-md px-6 py-3">3</th>
            <th className="text-md px-6 py-3">ART ON THE BLOCKCHAIN - SIMDOPE</th>


          </tr>
          <tr className=" border border-solid border-l-0 border-r-0">
            <th className="text-md px-6 py-3">4</th>
            <th className="text-md px-6 py-3">Q/A / EXPERIENCE/ CONTRIBUTIONS / PANEL</th>
          </tr>
          <tr className="border border-solid border-l-0 border-r-0">
            <th className="text-md px-6 py-3">5</th>
            <th className="text-md px-6 py-3">FLIP THE BOTTLE / GAMES (MINI BREAK) </th>
          </tr>
          <tr className="border border-solid border-l-0 border-r-0">
            <th className="text-md px-6 py-3">6</th>
            <th className="text-md px-6 py-3">OPPORTUNITIES IN SOLANA (SOLANA ALLSTARS/STEPDAO) </th>
          </tr>
          <tr className="border border-solid border-l-0 border-r-0">
            <th className="text-md px-6 py-3">7</th>
            <th className="text-md px-6 py-3">PIZZA / DRINK/ FOOD </th>
          </tr>
          <tr className=" border-solid border-l-0 border-r-0">
            <th className="text-md px-6 py-3">8</th>
            <th className="text-md px-6 py-3">KAHOOT </th>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Cta