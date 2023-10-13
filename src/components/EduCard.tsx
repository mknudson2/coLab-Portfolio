interface Props {
  imageURL: string;
  heading: string;
  text: string;
}

function EduCard({ imageURL, heading, text }: Props) {
  return (
    <>
      <div className="eduCard">
        <img className="edu-img" src={imageURL} alt="" />
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>

        {/* <img className="academicIcon" src="/Academic.svg" alt="" /> */}

    </>
  );
}

export default EduCard;
