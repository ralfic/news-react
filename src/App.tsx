import { Header } from './components/Header';
import { Home } from './pages/Home';

export function App() {
  return (
    <>
      <Header />
      <div className="p-6">
        <Home />
      </div>
    </>
  );
}
