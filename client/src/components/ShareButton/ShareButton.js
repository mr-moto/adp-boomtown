import React from 'react';
import { Link } from 'react-router-dom';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './styles.css';

const ShareButton = () => (
    <Link to="/share">
        <FloatingActionButton className="shareButton" secondary>
            <ContentAdd />
        </FloatingActionButton>
    </Link>
);

export default ShareButton;