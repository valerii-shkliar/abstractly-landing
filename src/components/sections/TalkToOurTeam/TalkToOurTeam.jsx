import style from './TalkToOurTeam.module.scss';
import Button from '../../tools/Button/Button';
import SectionHeader from '../../tools/SectionHeader/SectionHeader';
import dataContent from '../../../constants/dataContent';
import House from '../../../assets/images/icons/house.svg?react';
import Phone from '../../../assets/images/icons/phone.svg?react';
import Letter from '../../../assets/images/icons/letter.svg?react';
import clsx from 'clsx';

const MAX_LENGTH_TEXTAREA = 500;
const { talkToOurTeam } = dataContent;
const { header, contacts, form } = talkToOurTeam;
const { inputs, btn } = form;
const { name, email, message } = inputs;

function TalkToOurTeam() {
  return (
    <section className={style.talkToOurTeam}>
      <div className={style.contentContainer}>
        <SectionHeader title={header.title} text={header.text} className={style.header} />
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
      <form className={style.form} action="GET">
        <div className={style.inputsContainer}>
          <div className={style.inputContainer}>
            <label htmlFor="inputName" className={style.label}>
              {name.label}
            </label>
            <input
              type="text"
              id="inputName"
              placeholder={name.placeholder}
              className={style.input}
            />
          </div>
          <div className={style.inputContainer}>
            <label htmlFor="inputEmail" className={style.label}>
              {email.label}
            </label>
            <input
              type="email"
              id="inputEmail"
              placeholder={email.placeholder}
              className={style.input}
            />
          </div>
        </div>

        <div className={style.textareaContainer}>
          <label htmlFor="inputMessage" className={style.label}>
            {message.label}
          </label>
          <textarea
            type="email"
            id="inputMessage"
            placeholder={message.placeholder}
            className={style.input}
            maxLength={MAX_LENGTH_TEXTAREA}
          />
          <span className={style.limit}>{`0/${MAX_LENGTH_TEXTAREA}`}</span>
        </div>
        <Button kind="primary" className={style.btn}>
          {btn}
        </Button>
      </form>
    </section>
  );
}

export default TalkToOurTeam;
