import { Link } from "react-router-dom";
import { Wrapper } from "../../components/wrapper";

export default function SignInPage() {
  return (
    <Wrapper>
      <div>
        <p>Signin!</p>
        <Link to="/dashboard" className="underline underline-offset-2">
          Go to dashboard
        </Link>
      </div>
    </Wrapper>
  );
}
