import React from "react"
export default function UsersList({ user }) {
  return (
    <>
      <li>{user.full_name}</li>
      <li>{user.username}</li>
      <li >{user.bio}</li>
    </>
  )
}