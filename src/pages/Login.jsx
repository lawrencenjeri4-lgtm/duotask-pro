import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { loginWithGoogle } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login to DuoTask Pro</h1>

      <button
        onClick={loginWithGoogle}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Continue with Google
      </button>
    </div>
  );
}
