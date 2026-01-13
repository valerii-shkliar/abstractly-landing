const WRAPPER_CLASS = 'wrapper';

function FeatureWrapper(props) {
  return <div className={WRAPPER_CLASS}>{props.children}</div>;
}

export default FeatureWrapper;
