import s from "./styles.module.css";

const Check = () => {
  return (
    <div className={s.check}>
      <svg
        width="11"
        height="8"
        viewBox="0 0 11 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.992305 3.47308L4.46537 6.94614L3.47307 7.93845L0 4.46538L0.992305 3.47308Z"
          fill="white"
        />
        <path
          d="M3.47307 5.95383L9.4269 0L10.4192 0.992305L4.46537 6.94614L3.47307 5.95383Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Check;
