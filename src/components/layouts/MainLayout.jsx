import MainBanner from '../sections/main-banner/MainBanner';
import TeamsSection from '../sections/teams/TeamsSection';

function MainLayout() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <MainBanner />
        <TeamsSection />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default MainLayout;
