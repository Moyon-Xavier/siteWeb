import {Route,Routes} from 'react-rooter';
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
