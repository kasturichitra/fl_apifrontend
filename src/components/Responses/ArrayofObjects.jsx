import NonArrayOfObjects from "./NonArrayOfObjects";

/**
 *
 * Takes the body of the object and returns the type of the object and passes the objects-
 * --present in the body to get the components based on the type of the object
 *
 */
export default function ArrayofObjects({ body }) {
  return (
    <div className="border overflow-hidden rounded-lg border-gray-100/20  ">
      <div className="border-b border-gray-100/20 py-2 px-2">
        <h3 className="text-xs text-gray-200/50">array of objects</h3>
      </div>
      <div className="px-3 py-2 overflow-hidden">
        <NonArrayOfObjects body={body} type={body?.type} />
      </div>
    </div>
  );
}
