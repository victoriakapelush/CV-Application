/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import "../App.css";
import { SaveToPDF } from "./SaveToPDF";
import pdf from "../assets/file.png";

export default function Header({ contentRef }) {
  const generatePDF = SaveToPDF(contentRef); // Get the PDF generation function
  return (
    <div className="header-container flex-column inputsPersonalData">
      <div className="app-name flex-row">
        <h1 id="resume-builder-name">Resume Builder</h1>
        <div className="image-div flex-row">
          <img src={pdf} onClick={generatePDF}></img>
        </div>
      </div>
    </div>
  );
}
