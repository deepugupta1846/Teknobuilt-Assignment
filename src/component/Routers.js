import React from "react";
import { Route, Routes } from "react-router-dom";
import { Apple } from "./AppleNews";
import { BusinessNews } from "./BusinessNews";
import { EducationsNews } from "./EducationsNews";
import { Home } from "./Home";
import { ScienceNews } from "./ScienceNews";
import { SportsNews } from "./SportsNews";
import { TechNews } from "./TechNews";
import { Tesla } from "./TeslaNews";
export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tesla" element={<Tesla />} />
        <Route path="/business" element={<BusinessNews />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/tech" element={<TechNews />} />
        <Route path="/science" element={<ScienceNews />} />
        <Route path="/education" element={<EducationsNews />} />
        <Route path="/sports" element={<SportsNews />} />
      </Routes>
    </>
  );
};
