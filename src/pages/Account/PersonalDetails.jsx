import AccountNav from "../../components/AccountNav";
import "../../assets/stylesheets/account.css"

export default function PersonalDetails() {
  return (
    <>
      <h1 className="account-placeholder-text">this is personal details</h1>
      <AccountNav /> {/* idk if it's correct to call this component multiple times */}

    </>
  );
}
