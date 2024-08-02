const DateComponent = ({ info }) => {
  const date = info.getValue().date;

  return(
    <>
      {
        date.start && (
          <span>
            {date.start}
          </span>
        )
      }
      {
        date.end && (
          <span>
            -> {date.end}
          </span>
        )
      }
    </>
  )
};

export default DateComponent
