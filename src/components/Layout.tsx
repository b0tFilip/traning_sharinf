import { render } from "@testing-library/react";
import { useState } from "react";
import MyAccount from "../pages/myAccout";
import PracticeSets from "../pages/practiceSets";
import TrainingList from "../pages/trainingList";
import Header from "./Header";

const Layout = (props: any) => {
    const [page, updatePage] = useState("Practice Sets");
    const [theme, updateTheme] = useState("light");
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Header page={page} updatePage={updatePage} theme={theme} />

            {page === "Practice Sets" && <PracticeSets />}
            {page === "Training List" && <TrainingList />}
            {page === "My Account" && <MyAccount />}
        </div>
    );
};

export default Layout;
