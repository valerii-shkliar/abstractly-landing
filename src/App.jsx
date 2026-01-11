import MainLayout from './components/layouts/MainLayout';
import MainBanner from './components/sections/main-banner/MainBanner';
import TeamsSection from './components/sections/teams/TeamsSection';

function App() {
  return (
    <MainLayout>
      <MainBanner />
      <TeamsSection />
    </MainLayout>
  );
}

export default App;
