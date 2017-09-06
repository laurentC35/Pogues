import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector, actions } from 'redux-form';

import CollectedVariables from 'questionnaire/components/variables/collected-variables';
import { QUESTION_TYPE_ENUM } from 'constants/pogues-constants';
import { uuid } from 'utils/data-utils';
import Dictionary from 'utils/dictionary/dictionary';

const { SIMPLE, SINGLE_CHOICE, MULTIPLE_CHOICE, TABLE } = QUESTION_TYPE_ENUM;

function getGeneratedCollectedVariables(responseFormat, questionName) {
  let generatedCollectedVariables = [];

  if (responseFormat === SIMPLE || responseFormat === SINGLE_CHOICE) {
    generatedCollectedVariables = [
      {
        id: uuid(),
        name: questionName,
        label: `${questionName} label`,
      },
    ];
  }

  return generatedCollectedVariables;
}

const mapStateToProps = (state, { formName }) => {
  formName = formName || 'component';
  const selector = formValueSelector(formName);
  return {
    responseFormatType: selector(state, 'responseFormat.type'),
    name: selector(state, 'name'),
    formName,
  };
};

const mapDispatchToProps = {
  change: actions.change,
};

class CollectedVariablesContainer extends Component {
  static propTypes = {
    responseFormatType: PropTypes.string,
    name: PropTypes.string,
    formName: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    invalidItems: PropTypes.object,
  };

  static defaultProps = {
    responseFormatType: '',
    name: '',
    invalidItems: {},
  };

  componentWillUpdate(nextProps) {
    const { change, responseFormatType, name, formName } = this.props;

    if (responseFormatType !== nextProps.responseFormatType) {
      const generatedCollectedVariables = getGeneratedCollectedVariables(nextProps.responseFormatType, name);

      change(formName, 'collectedVariables', {
        name: '',
        label: '',
        collectedVariables: generatedCollectedVariables,
      });
    }
  }

  render() {
    return <CollectedVariables invalidItems={this.props.invalidItems} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectedVariablesContainer);
