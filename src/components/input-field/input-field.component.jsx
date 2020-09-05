import React, {Fragment} from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import {StyledLabel, StyledTextField} from './input-field.styles';

const InputField = ({handleChange, ...anyOtherProps}) => {
  const {name, label, type, value, icon} = anyOtherProps;
  return (
    <Fragment>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position='start'>
            {icon}
          </InputAdornment>
        }/>
    </Fragment>
  );
};

export default InputField;
