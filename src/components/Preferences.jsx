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
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    return (
      <React.Fragment>
        {
          CurrentCryptos.map(item => (
            <label class ="dispCheckboxes" key={item.key}>
                {item.name}
                <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
            </label>
          ))
        }
      </React.Fragment>
    );
  }
}

export default Preferences;

