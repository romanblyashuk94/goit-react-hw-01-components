import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import { colors } from 'components/Statistics/BackgroundColors';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((statEl, index) => (
          <li
            key={statEl.id}
            className={s.item}
            style={{
              backgroundColor: colors[index % 3],
            }}
          >
            <span className={s.label}>{statEl.label}</span>
            <span className={s.percentage}>{statEl.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
