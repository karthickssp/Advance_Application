import { useState, useEffect } from 'react';
import '../../assets/css/Profile.css';
import img from '../../assets/images/icon.jpg';
import PopupMessage from '../../components/others/Popup';

const UserProfile = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const [user, setUser] = useState({
    name: 'Karthick SSP',
    location: 'Salem, Tamil Nadu',
    age: 24,
    contact: 'karthickssp@email.com | (+91) 98765-43210',
  });

  const [editedUser, setEditedUser] = useState({ ...user });
  const [isUserEditing, setIsUserEditing] = useState(false);

  const [farm, setFarm] = useState({
    farmName: 'Green Acres Farm',
    location: 'Green Valley, Anytown, USA',
    farmSize: '50 acres',
    crops: ['Wheat', 'Corn', 'Soybeans'],
    livestock: 'None',
  });

  const [editedFarm, setEditedFarm] = useState({ ...farm });
  const [isFarmEditing, setIsFarmEditing] = useState(false);

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    setUser({ ...editedUser });
    setIsUserEditing(false);
    setPopupMessage('Profile saved successfully!');
    setShowPopup(true);

    // Close the pop-up after a few seconds (you can adjust the timeout)
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleUserCancel = () => {
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  const handleFarmEdit = () => {
    setIsFarmEditing(true);
  };

  const handleFarmSave = () => {
    setFarm({ ...editedFarm });
    setIsFarmEditing(false);
    setPopupMessage('Profile saved successfully!');
    setShowPopup(true);

    // Close the pop-up after a few seconds (you can adjust the timeout)
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleFarmCancel = () => {
    setEditedFarm({ ...farm });
    setIsFarmEditing(false);
  };

  useEffect(() => {
    // Fetch user and farm data from an API and set initial state
    // Example:
    // fetchUserData(userId)
    //   .then((userData) => {
    //     setUser(userData);
    //     setEditedUser(userData);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching user data:', error);
    //   });

    // Similar logic for fetching farm data
  }, []); // Add dependencies based on your actual implementation

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-photo" src={img} alt="Profile" />
        <h1 className="profile-title">{user.name} s Profile</h1>
      </div>
      <section className="user-details">
        <h2>User Details</h2>
        {isUserEditing ? (
          <>
            <label>Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.location}
              onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
            />
            <br />
            <label>Age: </label>
            <input
              className="input-field"
              type="number"
              value={editedUser.age}
              onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
            />
            <br />
            <label>Contact: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.contact}
              onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
            />
            <br />
            <button className="btn-save" onClick={handleUserSave}>Save</button>
            <button className="btn-cancel" onClick={handleUserCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>Name: {user.name}</p>
            <p>Location: {user.location}</p>
            <p>Age: {user.age}</p>
            <p>Contact: {user.contact}</p>
            <button className="btn-edit" onClick={handleUserEdit}>Edit</button>
          </>
        )}
      </section>

      <section className="farm-details">
        <h2>Farm Details</h2>
        {isFarmEditing ? (
          <>
            <label>Farm Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedFarm.farmName}
              onChange={(e) => setEditedFarm({ ...editedFarm, farmName: e.target.value })}
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field"
              type="text"
              value={editedFarm.location}
              onChange={(e) => setEditedFarm({ ...editedFarm, location: e.target.value })}
            />
            <br />
            <label>FarmSize: </label>
            <input
              className="input-field"
              type="text"
              value={editedFarm.farmSize}
              onChange={(e) => setEditedFarm({ ...editedFarm, farmSize: e.target.value })}
            />
            <br />
            <label>LiveStock: </label>
            <input
              className="input-field"
              type="text"
              value={editedFarm.livestock}
              onChange={(e) => setEditedFarm({ ...editedFarm, livestock: e.target.value })}
            />
            {/* ... Add similar input fields for other farm details */}
            <br />
            <button className="btn-save" onClick={handleFarmSave}>Save</button>
            <button className="btn-cancel" onClick={handleFarmCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>Farm Name: {farm.farmName}</p>
            <p>Location: {farm.location}</p>
            <p>FarmSize: {farm.farmSize}</p>
            <p>LiveStock: {farm.livestock}</p>
            {/* ... Add similar paragraphs for other farm details */}
            <button className="btn-edit" onClick={handleFarmEdit}>Edit</button>
          </>
        )}
      </section>
      {showPopup && <PopupMessage message={popupMessage} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default UserProfile;
