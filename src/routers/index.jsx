import Footer from "components/organisms/Footer";
import Header from "components/organisms/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PathRoutes from "./PathRoutes";
import ScrollToTop from "./ScrollToTop";
import * as Pages from "pages";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        {PathRoutes?.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="/*" element={<Pages.NotFound />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
