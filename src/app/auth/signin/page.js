"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>로그인 페이지</h1>
      <button
        onClick={() => signIn("google")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        구글 로그인
      </button>
    </div>
  );
}
