import React from 'react';
import { FormSection } from 'redux-form';
import PropTypes from 'prop-types';

import { defaultMeasureState } from '../../../model/response-format-table';
import InputMeasure from './input-measure';

import { ListWithInputPanel } from 'widgets/list-with-input-panel';
import { validateTableListMeasuresForm } from 'utils/validation/validate';

import { DEFAULT_FORM_NAME } from 'constants/pogues-constants';

// Utils

const validateForm = (setErrors, validate) => values => {
  return validate(values, setErrors);
};

// Prop types and default props

export const propTypes = {
  formName: PropTypes.string,
  selectorPath: PropTypes.string.isRequired,
  setErrors: PropTypes.func.isRequired,
};

export const defaultProps = {
  formName: DEFAULT_FORM_NAME,
};

// Component

function TableListMeasures({ formName, selectorPath, setErrors }) {
  return (
    <FormSection name="LIST_MEASURE">
      <ListWithInputPanel
        formName={formName}
        selectorPath={selectorPath}
        name="measures"
        validateForm={validateForm(setErrors, validateTableListMeasuresForm)}
        resetObject={defaultMeasureState}
      >
        <InputMeasure selectorPath={selectorPath} />
      </ListWithInputPanel>
    </FormSection>
  );
}

TableListMeasures.propTypes = propTypes;
TableListMeasures.defaultProps = defaultProps;

export default TableListMeasures;
