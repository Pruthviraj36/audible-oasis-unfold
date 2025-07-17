import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Library } from "@/pages/Library";
import { Profile } from "@/pages/Profile";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "library":
        return <Library />;
      case "search":
        return <Library />; // Using Library page for search as well
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default Index;
