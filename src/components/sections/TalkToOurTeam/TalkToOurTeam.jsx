import { Formik, Form } from 'formik';
import { validationSchema, initialValues } from '../../../constants/formDataTalkToOurTeam';
import style from './TalkToOurTeam.module.scss';
import Button from '../../tools/Button/Button';
import SectionHeader from '../../tools/SectionHeader/SectionHeader';
import dataContent from '../../../constants/dataContent';
import House from '../../../assets/images/icons/house.svg?react';
import Phone from '../../../assets/images/icons/phone.svg?react';
import Letter from '../../../assets/images/icons/letter.svg?react';
import InputBox from '../../tools/InputBox/InputBox';

const { talkToOurTeam } = dataContent;
const { header, contacts, form } = talkToOurTeam;
const { inputs, btn } = form;
const { name, email, message } = inputs;

function TalkToOurTeam() {
  function handleFormSubmit(values, { resetForm }) {
    console.log('Submitted values:', values);
    resetForm();
  }

  return (
    <section className={style.talkToOurTeam}>
      <div className={style.contentContainer}>
        <SectionHeader
          title={header.title}
          text={header.text}
          className={style.header}
          classNameSectionHeader={style.sectionHeader}
          classNameTitle={style.title}
          classNameText={style.text}
        />
        <address className={style.contactsContainer}>
          <div className={style.contactItem}>
            <a className={style.contactText}>
              <House className={style.contactIcon} />
              {contacts.address}
            </a>
          </div>
          <div className={style.contactItem}>
            <a className={style.contactText} href={`tel:${contacts.phone}`}>
              <Phone className={style.contactIcon} />
              {contacts.phone}
            </a>
          </div>
          <div className={style.contactItem}>
            <a className={style.contactText} href={`mailto:${contacts.email}`}>
              <Letter className={style.contactIcon} />
              {contacts.email}
            </a>
          </div>
        </address>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form className={style.form} action="POST">
          <div className={style.inputsContainer}>
            <InputBox
              classNameBox={style.inputContainer}
              classNameInput={style.input}
              name="name"
              placeholder={name.placeholder}
              id="inputName"
              type="text"
              label={name.label}
              hint={name.hint}
            />
            <InputBox
              classNameBox={style.inputContainer}
              classNameInput={style.input}
              name="email"
              placeholder={email.placeholder}
              id="inputEmail"
              label={email.label}
              type="email"
              hint={email.hint}
            />
          </div>

          <InputBox
            classNameBox={style.textareaContainer}
            classNameInput={style.textarea}
            name="message"
            id="inputMessage"
            placeholder={message.placeholder}
            label={message.label}
            hint={message.hint}
            maxLength={message.maxLength}
            kindItem="textarea"
          />

          <Button kind="primary" className={style.btn} type="submit">
            {btn}
          </Button>
        </Form>
      </Formik>
    </section>
  );
}

export default TalkToOurTeam;
