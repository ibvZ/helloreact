import s from './Users.module.css';
import * as axios from 'axios';
import React from 'react';

class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
    }
  }

  render() {
    return (
      <div className={s.users}>
        {
          this.props.users.map(u => <div className={s.userBox} key={u.id}>
            <div className={s.avaBox}>
              <div>
                <img src={ u.photos.small !== null ? u.photos.small : '/images/ava_pavel.jpg' } />
              </div>
              <div>
                { u.followed
                ? <button onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button>
                : <button onClick={ () => {this.props.follow(u.id)} }>Follow</button> }
              </div>
            </div>
            <div className={s.informationBox}>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div className={s.locationBox}>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          </div>)
        }
      </div>
    );
  }

}

export default Users;