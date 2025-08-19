import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthView from "./pages/auth/AuthView";
import ChatView from "./pages/chat/ChatView";
import ProfileView from "./pages/profile/ProfileView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthView />} />
        <Route path="/chat" element={<ChatView />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="*" element={<Navigate to="auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
