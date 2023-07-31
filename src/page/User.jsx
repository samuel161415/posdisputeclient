import React from 'react'

function User() {
  const name='Samuel'
  const Role='ARTeam'
  return (
    <div class=' w-full border-2 shadow-md'>
      <h1 class='text-center'>User Info</h1>
      <div>
        <ul>
          <li>
             Name: {name}
          </li>
          <li>
            Role: {Role}
          </li>
        </ul>

      </div>
    </div>
  )
}

export default User