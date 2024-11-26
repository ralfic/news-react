import { Header } from './components/Header';
import { Home } from './pages/Home';

export function App() {
  return (
    <AppLayout header={<Header />}>
      <Home />
    </AppLayout>
  );
}

function AppLayout({ header, children }) {
  return (
    <div>
      {header}
      <div className="px-6 mt-4">{children}</div>
    </div>
  );
}
