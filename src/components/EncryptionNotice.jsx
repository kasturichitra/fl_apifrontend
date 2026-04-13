import { Link } from "react-router-dom";

export default function EncryptionNotice() {
  return (
    <div className="text-xs bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-md my-3">
      ⚠️ This API requires encryption & decryption.{" "}
      <Link
        to="/reference/encrypt_and_decryption"
        className="text-blue-600 underline"
      >
        Learn more
      </Link>
    </div>
  );
}