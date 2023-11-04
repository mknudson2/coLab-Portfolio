interface DescriptionProps {
  data: {
    imageURL: string;
    heading: string;
    description: string;
  };
}

const EduDescription: React.FC<DescriptionProps> = ({ data }) => {
  return (
    <section className="edu-DescContainer">
      <div className="edu-description">
        <h2>{data.heading}</h2>
        <p>{data.description}</p>
      </div>
    </section>
  );
};

export default EduDescription;
