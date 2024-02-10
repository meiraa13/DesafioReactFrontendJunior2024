import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { FilteredContent } from "../pages/FilteredContent";


export function AppRouter(){

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:filter" element={<FilteredContent />} />
        </Routes>

    )
}