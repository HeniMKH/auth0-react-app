// import { useAuth0 } from '@auth0/auth0-react';
// import React from 'react'

// const Profile = () => {
//     const { user, isAuthenticated } = useAuth0();
    
//   return (
//     isAuthenticated && (
//       <article className='column'>
//       {/* {user?.picture && <img src={user.picture} alt={user?.name} />}
//   //  <h2>{user?.name}</h2> */}
//       <ul>
//       {Object.keys(user).map((objKey, i) => {
//             if (objKey === 'picture') {
//               return <img key={i} src={user[objKey]} alt={user?.name} />;
//             } else {
//              return <li key={i}>{objKey}: {user[objKey]}</li>;
//             }
//           })}
//       </ul>
//   </article>

//     )
   
//   )
// }

// export default Profile

import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <div className='column'>
      {isAuthenticated ? (
        <div>
          <h2>{user?.name}</h2>
          {user?.picture && <img src={user.picture} alt={user?.name} />}
          <ul>
            {Object.keys(user).map((objKey, i) => {
              if (objKey !== 'picture' && objKey !== 'name') {
                return <li key={i}>{objKey}: {user[objKey]}</li>;
              }
              return null;
            })}
          </ul>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <h2>Auth0</h2>
          <p>Please sign in to view your profile.</p>
        </div>
      )}
    </div>
  );
};

export default Profile;