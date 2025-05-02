import { messages } from '../../../data/messages';
import sprite from '../../../assets/sprite.svg';
import css from './Communication.module.css';

const Communication = () => {
  return (
    <section className={css.communication}>
      <h2>Communication</h2>
      <div className={css.wrapper}>
        <div className={css.controls}>
          <input type="text" placeholder="Search" />
          <div className={css.actions}>
            <button className={css.btn}>Filter</button>
            <button className={css.btn}>Group</button>
          </div>
        </div>

        <div className={css.grid}>
          <div className={css.column}>
            {messages
              .filter(msg => msg.type === 'left')
              .map(
                ({ id, status, title, author, date, message, attachments }) => (
                  <article key={id} className={css.messageLeft}>
                    {status && <span className={css.badge}>{status}</span>}
                    <h3>{title}</h3>
                    <p className={css.meta}>
                      {author} <span>//</span> {date}
                    </p>
                    <p className={css.text}>{message}</p>

                    {attachments > 0 && (
                      <div className={css.attachments}>
                        <svg width={14} height={14}>
                          <use href={`${sprite}#icon-attachment`} />
                        </svg>
                        {attachments} attachments
                      </div>
                    )}
                    <div>
                      <button className={css.reply}>Reply</button>
                    </div>
                  </article>
                )
              )}
          </div>

          <div className={css.column}>
            {messages
              .filter(msg => msg.type === 'right')
              .map(
                ({ id, status, title, author, date, message, attachments }) => (
                  <article key={id} className={css.messageRight}>
                    {status && <span className={css.badgeBlue}>{status}</span>}
                    <h3>{title}</h3>
                    <p className={css.meta}>
                      {author} <span>//</span> {date}
                    </p>
                    <p className={css.text}>{message}</p>

                    {attachments > 0 && (
                      <div className={css.attachments}>
                        <svg width={14} height={14}>
                          <use href={`${sprite}#icon-attachment`} />
                        </svg>
                        {attachments} attachments
                      </div>
                    )}

                    <button className={css.reply}>Reply</button>
                  </article>
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communication;
