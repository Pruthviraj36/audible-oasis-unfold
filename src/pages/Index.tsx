import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Library } from "@/pages/Library";
import { Profile } from "@/pages/Profile";
import { Search } from "@/pages/Search";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "library":
        return <Library />;
      case "search":
        return <Search />;
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
