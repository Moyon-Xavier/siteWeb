import { createRoot } from "react-dom/client";
import Header from "./utils/Header";
import Main from "./Main/Main";
import Footer from "./utils/Footer";

const root = createRoot(document.querySelector('.body')!);
console.log("HEy")
root.render(
	<>
        <Header/>
        <Main/>
        <Footer/>
    </>
    
);
