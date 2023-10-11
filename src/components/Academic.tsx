import EduCard from "./EduCard";

function Academic() {
  const eduData = [
    {
      imageURL:
        "https://coursedog-images-public.s3.us-east-2.amazonaws.com/byu/Main%20Image%20-%20Campus.jpg",
      heading: "Brigham Young University",
      text: "B.A. European Studies & Scandinavian Studies",
    },
    {
      imageURL:
        "https://d26toa8f6ahusa.cloudfront.net/wp-content/uploads/2020/12/15163039/16x9-Uni-of-Aberdeen-Kings-College.jpg",
      heading: "The University of Aberdeen",
      text: "M.Litt. Viking and Medieval Scandinavian Studies & Celtic Studies",
    },
    {
      imageURL:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/madison/16_FALL_UW_bascom_bbb5a986-44bb-4e56-9237-ff316bcefc9c.jpg",
      heading: "The University of Wisconsin-Madison",
      text: "Ph.D. Scandinavian Studies–Philology & Medieval Studies",
    },
  ];

  return (
    <>
      <div id="academia" className="academiaSection">
        <h2>Academia</h2>
        <p></p>
      </div>
      <div className="card-display">
        {eduData.map((data) => (
          <EduCard
            key={data.heading}
            imageURL={data.imageURL}
            heading={data.heading}
            text={data.text}
          />
        ))}
      </div>
    </>
  );
}

export default Academic;
