import React from 'react';
import PropTypes from 'prop-types';

export default class ComponentTestingPropsAndState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requiredText: 'Required prop: ',
      notRequiredText: 'Not required prop (with default prop): ',
    };
  }

  render() {
    const { required, notRequired } = this.props;
    const { requiredText, notRequiredText } = this.state;

    return (
      <div>
        <h3>
          { requiredText }
          { required }
        </h3>
        <h3>
          { notRequiredText }
          { notRequired }
        </h3>
      </div>
    );
  }
}

ComponentTestingPropsAndState.propTypes = {
  required: PropTypes.string.isRequired,
  notRequired: PropTypes.string,
};

ComponentTestingPropsAndState.defaultProps = {
  notRequired: 'Was not required',
};
