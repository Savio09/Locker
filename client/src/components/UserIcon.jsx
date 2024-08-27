function UserIcon({ user }) {
  console.log(user);
  return (
    <div className="user-icon" style={{ ...styles }}>
      {/** Probably get the first name of the user and the lastname and then use the index to form it */}
      <p style={{ fontWeight: "700", color: "#fff" }}>
        {user.firstname[0]}
        {user.lastname[0]}
      </p>
    </div>
  );
}

const styles = {
  background: "grey",
  width: 40,
  height: 40,
  padding: 20,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

export default UserIcon;
