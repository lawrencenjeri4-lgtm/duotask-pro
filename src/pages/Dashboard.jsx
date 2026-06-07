import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 DuoTask Pro Dashboard</h1>

      <p>
        Welcome, <strong>{user?.displayName || user?.email}</strong>
      </p>

      <div style={{ marginTop: "20px" }}>
        <h3>Stats</h3>
        <p>🔥 Streak: 0</p>
        <p>💎 XP: 0</p>
        <p>⭐ Level: 1</p>
      </div>

      <button
        onClick={logout}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}
