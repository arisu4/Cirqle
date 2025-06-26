import React from 'react'
import './Profile.css';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

  return (
    <div className="profile-container">
    <div className="sidebar">
      <button className="tab active">My Profile</button>
      <button className="tab">Password</button>
      <button className="tab">Social Profile Link</button>
    </div>

    <div className="profile-content">
      <h2>My Profile</h2>
      <div className="profile-picture">
        <img src={defaultProfile} alt="Profile" />
        <div className="camera-icon">📷</div>
      </div>

      <div className="form-group">
        <label>Email Address <span className="required">*</span></label>
        <input type="email" value={email} readOnly />
      </div>

      <div className="form-group">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="action-buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  </div>
  )
}

export default Profile