import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
function PasswordInput({
  id,
  value,
  maxLength,
  required,
  inputElementKey,
  openVirtualKeyboard,
  closeVirtualKeyboard,
  setInputElement,
  nextInputFocus,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (value.length === maxLength && setInputElement && nextInputFocus) {
      nextInputFocus({
        inputElementKey,
        notExistNextElementAction: closeVirtualKeyboard,
      });
    }
  }, [value, setInputElement, nextInputFocus, maxLength, inputElementKey, closeVirtualKeyboard]);

  const onFocus = () => {
    openVirtualKeyboard(inputElementKey, inputRef.current);
  };

  const onKeyDown = e => {
    if (e.key === 'Tab') {
      return;
    }

    e.preventDefault();
    return false;
  };

  return (
    <input
      className="input-basic"
      type="password"
      id={id}
      value={value}
      maxLength={maxLength}
      required={required}
      ref={element => {
        if (setInputElement) {
          setInputElement(inputElementKey, element);
        }

        inputRef.current = element;
      }}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onChange={() => false}
    />
  );
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  inputElementKey: PropTypes.string,
  openVirtualKeyboard: PropTypes.func,
  closeVirtualKeyboard: PropTypes.func,
  setInputElement: PropTypes.func,
  nextInputFocus: PropTypes.func,
};

export default PasswordInput;
