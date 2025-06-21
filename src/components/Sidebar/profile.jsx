import { ProfileContaier } from "./style";
import noImg from "../../assets/images/noUser.webp";

export const Profile = ({name, email, photo}) => {
  return (
    <ProfileContaier>
      <ProfileContaier.Image src={photo || noImg} />
      <div>
        <ProfileContaier.Name>{name || "User"}</ProfileContaier.Name>
        <ProfileContaier.Email>{email || 'User Mail'}</ProfileContaier.Email>
      </div>
    </ProfileContaier>
  );
};
export default Profile;