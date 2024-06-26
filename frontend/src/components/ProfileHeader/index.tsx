import { CaretDown } from "@phosphor-icons/react";
import { Avatar, ProfileContainer } from "./styles";
import { useState } from "react";
import { UserCard } from "../UserCard";

export function ProfileHeader() {
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const handleProfileClick = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <ProfileContainer isDropdownVisible={isDropdownVisible} onClick={handleProfileClick}>
        <UserCard isActive={isDropdownVisible}/>  

      {/* { !isDropdownVisible && */}
        <main>
          <Avatar src='https://static.vecteezy.com/system/resources/previews/019/896/012/original/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' />
          <span>
            Giovana Niehues
          </span>
          <CaretDown size={14} />
        </main>
      {/* } */}
    </ProfileContainer>
  )
}