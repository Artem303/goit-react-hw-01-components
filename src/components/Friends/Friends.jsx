import css from './Friends.module.css';
import PropTypes from 'prop-types';

function statusColor(stat) {
  return stat ? 'online' : 'offline';
}

export const Friends = ({ friendsList }) => {
  return (
    <ul className={css.friendList}>
      {friendsList.map(({ avatar, name, id, isOnline }) => {
        return (
          <li className="item" key={id}>
            <span
              className={`${css.status} ${css[statusColor(isOnline)]}`}
            ></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
};
