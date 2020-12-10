import "./Preferences.css"
import React from 'react';
import PropTypes from 'prop-types';

const CurrentCryptos = [
  {
    name: 'Crypto-1',
    key: 'checkBox1',
    label: 'Check Box 1',
  },
  {
    name: 'Crypto-2',
    key: 'checkBox2',
    label: 'Check Box 2',
  },
  {
    name: 'Crypto-3',
    key: 'checkBox3',
    label: 'Check Box 3',
  },
  {
    name: 'Crypto-4',
    key: 'checkBox4',
    label: 'Check Box 4',
  },
];

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

class Preferences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: "TestUserName",
      Mail: "TestMail",
      FirstName: "TestFirstName",
      LastName: "TestLastName",
      checkedCrypto: new Map(),
    }

    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.ChangeLastName = this.ChangeLastName.bind(this);
    this.ChangeFirstName = this.ChangeFirstName.bind(this);
    this.Change = this.Change.bind(this);
  }

  handleChangeMail(event) {
    this.setState({ Mail: event.target.value });
  }

  ChangeLastName(event) {
    this.setState({ LastName: event.target.value });
  }

  ChangeFirstName(event) {
    this.setState({ FirstName: event.target.value });
  }

  changeUserName(event) {
    this.setState({ UserName: event.target.value });
  }
  
  Change(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({ checkedCrypto: prevState.checkedCrypto.set(item, isChecked) }));
  }

  render() {
    return (
      <React.Fragment>
        <div class="preferences">
          <p>Preferences</p>
          <label>
              UserName :<br></br>
              <input
                type="text"
                value={this.state.UserName}
                onChange={this.changeUserName}
              />
          </label>
          <label>
              Mail :<br></br>
              <input
                type="text"
                value={this.state.Mail}
                onChange={this.handleChangeMail}
              />
          </label>
          <label>
              FirstName :<br></br>
              <input
                type="text"
                value={this.state.FirstName}
                onChange={this.ChangeFirstName}
              />
          </label>
          <label>
              LastName :<br></br>
              <input
                type="text"
                value={this.state.LastName}
                onChange={this.ChangeLastName}
              />
          </label>
          <label>
              Your Cryptos :<br></br>
          </label>
          {
            CurrentCryptos.map(item => (
              <label class ="dispCheckboxes" key={item.key}>
                  <span class="span"><Checkbox name={item.name} checked={this.state.checkedCrypto.get(item.name)} onChange={this.Change} /></span>
                  {item.name}
              </label>
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Preferences;

