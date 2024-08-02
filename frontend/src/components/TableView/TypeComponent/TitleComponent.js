const TitleComponent = ({ info }) => (
  <span>
    {info.getValue().title[0]['plain_text']}
  </span>
);

export default TitleComponent
