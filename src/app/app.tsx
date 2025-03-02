import { createRoot } from "react-dom/client";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import { BrowserRouter } from 'react-router';
import Navigator from "./Navigator";

const root = createRoot(document.querySelector('.body')!);
console.log("HEy")
root.render(
	<BrowserRouter>
        <Header/>
        <Navigator/>
        <Footer/>
    </BrowserRouter>
    
);
