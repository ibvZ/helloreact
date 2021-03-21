import s from './Users.module.css';
import * as axios from 'axios';
import React from 'react';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
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

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={s.users}>
        <div>
          {
            pages.map(p => {
              return <span className={this.props.currentPage === p && s.selectedPage}
              onClick={(e) => { this.onPageChanged(p) }}>{p} </span>
            })
          }
        </div>
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