import PropTypes from 'prop-types';
import {checkOnline} from './checkOnline'
import css from './FriendList.module.css';

export const FriendList = ({ props }) => {
    return (
        <ul className={css.friendList}>
            {props.map(({ avatar, name, isOnline, id }) => 
            (
                 <li className={css.item} key={id}>
          <span
            className={`${css.status} ${css[checkOnline(isOnline)]}`}
          ></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
