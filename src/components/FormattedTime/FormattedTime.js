import styles from './FormattedTime.module.scss';

function formatTime(time) {
    console.log(time);
    const miliseconds = ((time / 0.1) % 1000);
    const seconds = Math.floor((time / 100) % 60);
    const minutes = Math.floor((time / 6000) % 60);
    const hours = Math.floor((time / 360000) % 24);
  
    return { miliseconds, seconds, minutes, hours }
  }

const FormattedTime = props => {
  const timeFormat = formatTime(props.time);

     return (
        <div className={styles.timer}>
            <span>{('0' + timeFormat.hours).slice(-2)}:</span>
            <span>{('0' + timeFormat.minutes).slice(-2)}:</span>
            <span>{('0' + timeFormat.seconds).slice(-2)}.</span>
            <span>{('0' + timeFormat.miliseconds).slice(-3)}</span>
        </div>
     )
};

export default FormattedTime;