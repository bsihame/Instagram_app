import React from 'react';

export default function Setting() {
  return (
    <>
      <div>
      <p >profile image</p>
      <h1>username</h1>
        <button>Change Profile Photo</button>
        <label>Name
          <input /></label>
        <p>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
        <p>You can only change your name twice within 14 days.</p>
        <label>
          Username <input />
        </label>
        <label>
          Bio <input />
        </label>
        <h2>Personal Information</h2>
        <p>Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</p>
        <label>
          Email <input />
        </label>
        <button>Confirm Email</button>
        <label>
          Phone Number  <input />
        </label>

        <button></button>
      </div>

        <div>footer</div>
  </>
  )
}