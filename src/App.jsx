import MainLayout from './components/layouts/MainLayout';
import MainBanner from './components/sections/MainBanner/MainBanner';
import TeamsSection from './components/sections/Teams/TeamsSection';
import EasyAccess from './components/sections/EasyAccess/EasyAccess';
import ForDesigners from './components/sections/ForDesigners/ForDesigners';
import ConvenienceAndLicensing from './components/sections/ConvenienceAndLicensing/ConvenienceAndLicensing';
import FitForAll from './components/sections/FitForAll/FitForAll';
import FrequentlyAsked from './components/sections/FrequentlyAsked/FrequentlyAsked';
import TalkToOurTeam from './components/sections/TalkToOurTeam/TalkToOurTeam';

function App() {
  return (
    <MainLayout>
      <MainBanner />
      <TeamsSection />
      <EasyAccess />
      <ForDesigners />
      <ConvenienceAndLicensing />
      <FitForAll />
      <FrequentlyAsked />

      <TalkToOurTeam />
    </MainLayout>
  );
}

export default App;
