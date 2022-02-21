import React from 'react'
import Profile from '../components/Profile';
import Show_Img from '../components/Show_Image';
import { useParams } from 'react-router-dom';

function Account() {
  const { id } = useParams();
  return (
    <div>
      <Profile id={id} />
      <Show_Img id={id} />
    </div>
  );
}

export default Account;