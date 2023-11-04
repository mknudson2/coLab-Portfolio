import { useState } from "react";
import EduCard from "./EduCard";
import EduDescription from "./EduDescription";


interface EduData {
  imageURL: string;
  heading: string;
  text: string;
  description: string;
}

function Academic() {
  const eduData: EduData[] = [
    {
      imageURL:
        "https://coursedog-images-public.s3.us-east-2.amazonaws.com/byu/Main%20Image%20-%20Campus.jpg",
      heading: "Brigham Young University",
      text: "B.A. European Studies & Scandinavian Studies",
      description: "From 2008-2015, with a two-year deferral in Norway from 2009-2011, I attended BYU in Provo, UT. My B.A. was in European Studies as part of the culture track. This track allowed me to focus my studies on the languages, literatures, and cultures of the Old Norse and Anglo-Saxon worlds. Furthermore, I took the Scandinavian Studies minor, allowing me to focus on Norwegian and Icelandic. I worked closely with Drs Nate Kramer, Chip Oscarson, George Tate, Steven Sondrup, Miranda Wilcox, and Don Chapman. By graduation, I had focused my interests on the cross-cultural interactions between the Nordic and the British Isles, resulting in what would be my first publication. This paper, published as a chapter in the book \"Memory and Identity in the Medieval and early Modern World\" (Oxford: Peter Lang, 2022) and examines the connection between the Middle English Havelok the Dane and the Norwegian Hákon Hákonarson."
    },
    {
      imageURL:
        "https://d26toa8f6ahusa.cloudfront.net/wp-content/uploads/2020/12/15163039/16x9-Uni-of-Aberdeen-Kings-College.jpg",
      heading: "The University of Aberdeen",
      text: "M.Litt. Viking and Medieval Scandinavian Studies & Celtic Studies",
      description: "I studied at the University of Aberdeen in Aberdeen, Scotland, UK from 2015-2016 where I earned my M.Litt., having graduated with Distinction, in Viking and Medieval Scandinavian Studies. Having left BYU with a particular interest in connections between the Norse and Celtic worlds, I pursued both medieval and modern Celtic studies to supplement and expand my interests through modern Scottish Gaelic and medieval Welsh. My master's thesis built on these interests, while adding my interest in the religious change (christianization) of the medieval North. It examined the understanding and use of the word \"guðníðingr\" (apostate) in a thirteenth-centry Icelandic perception, using the descriptions of the viking Bróðir and the Battle of Clontarf featured both in \"Njáls\" saga and the Old Irish \"Cogadh Gaedhel re Gallaibh\"."
    },
    {
      imageURL:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/madison/16_FALL_UW_bascom_bbb5a986-44bb-4e56-9237-ff316bcefc9c.jpg",
      heading: "The University of Wisconsin-Madison",
      text: "Ph.D. Scandinavian Studies–Philology & Medieval Studies",
      description: "Returning to the United States, I completed my Ph.D. in Scandinavian Studies–Philology at the University of Wisconsin-Madison, under the direction of Drs Kirsten Wolf and Thomas DuBois from 2016-2023. I further refined my skills in Old English with Dr. Martin Foys through my doctoral minor in Medieval Studies. While pursing my Ph.D., I had the opportunity to teach a variety of language and content courses both at Wisconsin and at other institutions. I designed and taught courses both in-person and online, such as Icelandic language (in Icelandic; UW-Madison, private lessons), Norwegian (in Norwegian; UW-Madison, BYU, Yale, St. Olaf, private lessons), History of the English Language (BYU), the Vikings (UW-Madison, BYU, St. Olaf), Norse Mythology and Christianization (St. Olaf), Hans Christian Anderson (UW-Madison), and 19th Century Scandinavian Fiction (UW-Madison). My Ph.D. culimated in my dissertation that focused on the presence and influence of monastic thought in the religious and secular literature produced at the Benedictine Monastery of Þingeyrar in Iceland."
    },
  ];

  const [selectedCard, setSelectedCard] = useState<EduData | null>(null);

  const handleClick = (index: number) => {
    if (selectedCard && selectedCard.heading === eduData[index].heading) {
      setSelectedCard(null); // Close if it's the same card that is already open
    } else {
      setSelectedCard(eduData[index]); // Show the selected card
    }
  };

  return (
    <>
      <div className="academiaSection">
        <h2>Academia</h2>
        <p></p>
      </div>
      <div className="card-display">
        {eduData.map((data, index) => (
          <EduCard
            key={data.heading}
            imageURL={data.imageURL}
            heading={data.heading}
            text={data.text}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {selectedCard && <EduDescription data={selectedCard} />}
    </>
  );
}

export default Academic;
