import React from 'react';
import PropTypes from 'prop-types';
import ClassSet from 'react-classset';
import { Button } from 'gillespie59-react-rte/lib/RichTextEditor';

import ButtonWrap from './button-wrap';

import { ICON_BUTTON } from 'constants/dom-constants';

const { COMPONENT_CLASS, IS_ACTIVE, ICON } = ICON_BUTTON;

// PropTypes and defaultProps

const propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.element,
};

const defaultProps = {
  isActive: true,
  children: undefined,
  className: '',
};

function IconButton({
  className,
  iconName,
  label,
  children,
  isActive,
  ...otherProps
}) {
  return (
    <ButtonWrap>
      <Button
        {...otherProps}
        title={label}
        className={ClassSet({
          [className]: true,
          [COMPONENT_CLASS]: true,
          [IS_ACTIVE]: isActive,
        })}
      >
        <span className={`${ICON} icon-${iconName}`} />
      </Button>
      {children}
    </ButtonWrap>
  );
}

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
