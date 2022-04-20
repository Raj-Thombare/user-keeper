import './NewUser.css'

const NewUser = () => {
  return (
    <div>
      <form>
        <div className="form_container card">
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label>Age (years)</label>
            <input type="number" />
          </div>
          <div>
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
