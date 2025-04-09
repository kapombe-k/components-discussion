import { Avatar } from "./components/Avatar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";

function App() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800">
			<main className="p-4"></main>
			<Header title="Practice react components and props"></Header> 
			<Profile/>
			<Footer/>
		</div>
	);
}

export default App;
