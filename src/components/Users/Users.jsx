import s from './Users.module.css';

let Users = (props) => {
  debugger;
  if (props.users.length === 0) {
    props.setUsers([
      {id: 1, fullName: 'Maria I', location: {country: 'Russia', city: 'Tomsk'},
        status: 'I am pretty', followed: true, photo:'/images/ava_masha.jpg'},
      {id: 2, fullName: 'Max R', location: {country: 'Russia', city: 'Tomsk'},
        status: 'I am a boss', followed: false, photo:'/images/ava_max.jpg'},
      {id: 3, fullName: 'Alex I', location: {country: 'Russia', city: 'Tomsk'},
        status: 'I am a musician', followed: true, photo:'/images/ava_sasha.jpg'}
    ]);
  }

  return (
    <div className={s.users}>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photo} />
            </div>
            <div>
              { u.followed
                  ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                  : <button onClick={ () => {props.follow(u.id)} }>Follow</button> }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  );
}

export default Users;