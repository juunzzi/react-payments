import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import LabelInputContainer from '../../LabelInputContainer';
import { isNumberInRange } from '../../../utils/validation/form';

function SecurityCodeInput({
  state,
  cardInputDispatch,
  inputElementsRef,
  stateName,
  setIsShowVirtualKeyboard,
}) {
  const onChangeSecurityCode = e => {
    const {
      target: { value: securityCode, maxLength },
    } = e;

    if (isNumberInRange(securityCode, maxLength)) {
      cardInputDispatch({
        type: 'CHANGE_SECURITY_CODE',
        payload: { securityCode },
      });
    }
  };

  return (
    <LabelInputContainer
      labelTitle="보안코드(CVC/CVV)"
      inputSize="w-25"
      helpText="카드 뒷면 서명란 또는 신용카드 번호 오른쪽 상단에 기재된 3자리 숫자"
    >
      <Input
        type="password"
        value={state}
        onChange={onChangeSecurityCode}
        maxLength={3}
        required
        inputElementsRef={inputElementsRef}
        inputElementKey={stateName}
        setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
      />
    </LabelInputContainer>
  );
}

SecurityCodeInput.propTypes = {
  state: PropTypes.string,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default SecurityCodeInput;
