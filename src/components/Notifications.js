import React, {useState} from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { PrimaryButton } from '../styles/buttons';

import ProfilePhoto from "./ProfilePhoto";

const StyledDrawer = styled.div`
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: midnightblue;
  color: white;
  overflow-x: hidden;
  width: ${props => props.openDrawer ? '300px' : 0};
  transition: 0.5s;
`;

const StyledInsight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 1em 0.5em;
  font-size: 14px;
  text-align: left;
  background-color: dodgerblue;
  border-radius: 10px;
`;

const StyledMessage = styled.p`
  margin: 0 1em;
`;

function Notifications(props) {
  const [drawer, showDrawer] = useState(false);
  const reactions = useSelector(state => state.posts.activity);


  const activity = reactions.map((activity, index) => {
    return (
      <StyledInsight
        key={index}
        >
          <ProfilePhoto
            photo={activity.photo}
            size="30"/>
          <StyledMessage>{activity.message}</StyledMessage>
      </StyledInsight>
    )
  })

  return (
    <div>
      <PrimaryButton
        onClick={activity.length > 0 ? () => showDrawer(!drawer) : null}
      >
        {activity.length > 0 ? `Toggle notifications (${activity.length}) `: 'No new notifications'}
      </PrimaryButton>
      <StyledDrawer openDrawer={drawer}>
        {activity}
      </StyledDrawer>
    </div>
  )
}

export default Notifications;
