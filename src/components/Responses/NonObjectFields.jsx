/**
 *
 *
 * This is the component returns the filed the is string [in-case of non-object types]
 *
 */

export default function NonObjectFields({ obj }) {
  const { title, type, subType, enums, required, subTitle } = obj;
  return (
    <div className="px-3 py-3 not-last:border-b border-gray-200/20">
      <div className="flex items-center gap-1.5 ">
        {title && <span className="text-sm font-semibold">{title}</span>}
        <span className="text-xs text-gray-200/50">{type}</span>

        {subType && <span className="text-xs text-gray-200/50">{subType}</span>}

        {required && <span className="text-red-400 text-xs">required</span>}
      </div>
      <p className="text-[13px] mt-0.5 text-gray-200/50">{subTitle}</p>
      {enums?.length > 0 && (
        <div className="flex gap-1 shrink  flex-wrap items-center mt-1">
          {enums.map((e) => {
            return (
              <span
                className="text-[11px] bg-gray-700   px-2 py-0.5 rounded text-white"
                key={e}
              >
                {e}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
