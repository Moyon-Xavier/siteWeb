import {Route,Routes} from 'react-router';
import Main from './Main/Main';
import Footer from './utils/Footer';
export default function Navigator() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
            <Route path="/he" element={<Footer/>}/>
		</Routes>
	);
}
