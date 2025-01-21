
import { createRoot } from "react-dom/client";
import UserContextProvider from "./contexts/UserContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateInfluencer from "./CreateInfluencer";
import Home from "./Home.js"
import Layout from "./Layout.js"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <UserContextProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="CreateInfluencer" element={<CreateInfluencer />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </UserContextProvider>
);
