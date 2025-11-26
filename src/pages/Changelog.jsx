import "../styles/changeLog.css";
import { releaseNotes } from "../utils/constant";

export default function Changelog() {
  return (
    <div className="changeLog_main">
      <div className="changeLog_body">
        {releaseNotes.map((item, i) => (
          <ChangeLog key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

function ChangeLog({ item }) {
  const { date, editType, title, fields, description, whatWasHappening, whatWeFixed } = item;

  return (
    <div className="changeLog_item">
      <DateTime date={date} editType={editType} />

      <div className="changeLog_info">
        <h2 className="changLog_info_head">{title}</h2>

        {fields?.length > 0 && (
          <div className="field_item_parent">
            {fields.map((f) => {
              const classItem = f.split(" ");
              return (
                <span
                  key={f}
                  className={`${classItem[classItem.length - 1]?.toLowerCase()} field_item`}
                >
                  {f}
                </span>
              );
            })}
          </div>
        )}

        <div className="changelog_body_content">
          {description?.map((d, idx) => <p key={idx}>{d}</p>)}

          {whatWasHappening && (
            <>
              <h4>🧩 What was happening</h4>
              {whatWasHappening.map((d, idx) => <p key={idx}>{d}</p>)}
            </>
          )}

          {whatWeFixed && (
            <>
              <h4>🔧 What we fixed</h4>
              {whatWeFixed.map((d, idx) => <p key={idx}>{d}</p>)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function DateTime({ date, editType }) {
  return (
    <div className="changeLog_time">
      <div>{date}</div>
      <div>{editType}</div>
    </div>
  );
}
