import PropTypes from "prop-types";
import { useState } from "react";
import { IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import profile from '../images/menu/profile.png';
import '../styles/MenuItems.css';

export default function MenuItems({ sections }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`menu-icones ${isOpen ? 'open' : ''}`}>
        <div className="search-container">
          <IconButton className="search-icon">
            <SearchIcon style={{ color: 'purple' }} />
          </IconButton>
          <input type="text" className="search-input" placeholder="Pesquisar" />
        </div>

        {sections.map((section, index) => (
          <Typography
            key={index}
            variant="body1"
            className="menu-item"
            style={{ fontFamily: 'Cutive Mono, monospace' }}
          >
            {section}
          </Typography>
        ))}

        <IconButton className="icon-button">
          <NotificationsIcon style={{ color: 'purple' }} />
        </IconButton>

        <IconButton className="icon-button settings-icon">
          <SettingsIcon style={{ color: 'purple' }} />
        </IconButton>

        <IconButton className="profile-pic">
          <img src={profile} alt="Profile" className="profile-pic" />
        </IconButton>
      </div>
    </div>
  );
}

MenuItems.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
};