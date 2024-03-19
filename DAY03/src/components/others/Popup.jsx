/* eslint-disable react/prop-types */
import '../../assets/css/Popup.css';

const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="popup-message">
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default PopupMessage;
