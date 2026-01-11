import MainLayout from './components/layouts/MainLayout';
import MainBanner from './components/sections/MainBanner/MainBanner';
import TeamsSection from './components/sections/Teams/TeamsSection';
import EasyAccess from './components/sections/EasyAccess/EasyAccess';

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
