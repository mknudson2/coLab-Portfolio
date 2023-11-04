import { BsFillPlusCircleFill } from "react-icons/bs";
// import { useState } from "react";

interface Props {
  imageURL: string;
  heading: string;
  text: string;
  onClick: () => void;
}

function EduCard({ imageURL, heading, text, onClick }: Props) {

  return (
    <>
      <section className="edu-container">
        <div className="eduCard">
          <img className="edu-img" src={imageURL} alt="" />
          <h2>{heading}</h2>
          <p>{text}</p>
          <button className="edu-plus" onClick={onClick}>
            <BsFillPlusCircleFill />
          </button>
        </div>
      </section>

      {/* <img className="academicIcon" src="/Academic.svg" alt="" /> */}
    </>
  );
}

export default EduCard;
