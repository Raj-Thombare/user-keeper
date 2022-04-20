import './NewUser.css'
import Card from '../UI/Card'

const NewUser = (props) => {
  return (
    <div>
      <form>
        <Card className="form_container">
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
        </Card>
      </form>
    </div>
  );
};

export default NewUser;
