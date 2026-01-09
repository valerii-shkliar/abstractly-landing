import MainLayout from './components/layouts/MainLayout';
import MainBanner from './components/sections/main-banner/MainBanner';
import TeamsSection from './components/sections/teams/TeamsSection';
import EasyAccess from './components/sections/easy-access/EasyAccess';

function App() {
  return (
    <MainLayout>
      <MainBanner />
      <TeamsSection />
      <EasyAccess />
    </MainLayout>
  );
}

export default App;
