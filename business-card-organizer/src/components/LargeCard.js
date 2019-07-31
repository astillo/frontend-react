import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Maybe change to props.history.push('/profile/edit')
const editButton = (
  <button onClick={<Redirect to='/profile/edit' />}>Edit</button>
);

const LargeCard = props => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    first_name: '',
    last_name: '',
    occupation: '',
    phone: '',
    tagline: '',
    qr_code: ''
  });

  useEffect(() => {
    props.getUser(props.userId);
  }, []);

  useEffect(() => {
    setUserInfo({
      ...userInfo,
      ...props.user
    });
  }, [props.user]);

  return (
    <div>
      <Card
        header={userInfo.first_name + userInfo.last_name}
        meta={userInfo.occupation}
        meta={userInfo.phone}
        meta={userInfo.email}
        description={userInfo.tagline}
        image={userInfo.qr_code}
        extra={editButton}
      />
    </div>
  );
};

export default LargeCard;
