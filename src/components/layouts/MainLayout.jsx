import FeatureWrapper from './FeatureWrapper';

function MainLayout(props) {
  return (
    <FeatureWrapper>
      {/* <Header /> */}
      <main>{props.children}</main>
      {/* <Footer/> */}
    </FeatureWrapper>
  );
}

export default MainLayout;
