import css from './Statistics.module.css';

import PropTypes from 'prop-types';

export const StatisticsCard = ({ text, props }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{text}</h2>
      <ul className={css.statList}>
        {props.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

StatisticsCard.propTypes = {
  text: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
