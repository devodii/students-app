import { useNavigate } from "react-router-dom";

export function Back() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <button className="underline underline-offset-2" onClick={handleClick}>
      Go back
    </button>
  );
}
