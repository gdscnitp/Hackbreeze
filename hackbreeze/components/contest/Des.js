import Main from "./Main";
function ExpenseItem(props) {
  return (
    <div className="w-full">
      <Main
        contest_name={props.contest_name}
        contest_des={props.contest_des}
        date={props.date}
        attendees={props.attendees}
        duration={props.duration}
        friends_att={props.friends_att}
        cid={props.cid}
      />
    </div>
  );
}
export default ExpenseItem;
