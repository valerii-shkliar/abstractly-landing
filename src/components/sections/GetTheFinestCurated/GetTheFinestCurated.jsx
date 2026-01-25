import image from '../../../assets/images/pictures/finest-curated-abstracts-image.png';
import SectionHeader from '../../tools/SectionHeader/SectionHeader';
import dataContent from '../../../constants/dataContent';
import CommonSectionContent from '../../tools/CommonSectionContent/CommonSectionContent';
import style from './GetTheFinestCurated.module.scss';
import PeculiarityItem from '../../tools/PeculiarityItem/PeculiarityItem';
import { Form, Formik } from 'formik';
import InputBox from '../../tools/InputBox/InputBox';
import Button from '../../tools/Button/Button';
import { initialValues, validationSchema } from '../../../constants/formDataGetTheFinestCurated';

const { getTheFinestCuratedAbstractsSection } = dataContent;
const { header, peculiarities, mainImage, text, form } = getTheFinestCuratedAbstractsSection;
const { input, btn } = form;

function GetTheFinestCurated() {
  function handleFormSubmit(values, { resetForm }) {
    console.log('Submitted values:', values);
    resetForm();
  }

  return (
    <section className={style.getTheFinestCurated}>
      <div className={style.contentContainer}>
        <h2 className={style.title}>{header.title}</h2>

        <div className={style.peculiaritiesContainer}>
          {peculiarities.map((peculiarity, i) => (
            <PeculiarityItem key={i} text={peculiarity.text} />
          ))}
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          <Form className={style.form} action="POST">
            <InputBox
              classNameBox={style.inputContainer}
              classNameInput={style.input}
              name="email"
              placeholder={input.placeholder}
              id="inputEmail"
              type="email"
              hint={input.hint}
            />

            <Button kind="primary" className={style.btn} type="submit">
              {btn}
            </Button>
            <p className={style.text}>{text}</p>
          </Form>
        </Formik>
      </div>
      <div className={style.pictureContainer}>
        <img src={image} alt={mainImage} className={style.picture} loading="lazy" />
      </div>
    </section>
  );
}

export default GetTheFinestCurated;
