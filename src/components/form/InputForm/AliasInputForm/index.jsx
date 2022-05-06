import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormComplete } from '../../../../hooks/useFormComplete';
import Position from '../../../commons/Position';
import PropTypes from 'prop-types';
import UnderlineInput from '../../Input/UnderlineInput';

function AliasInputForm({ cardId, cardListDispatch }) {
  const navigate = useNavigate();
  const [alias, setAlias] = useState('');

  const isComplete = useFormComplete(alias, alias => alias.length > 0);

  const onSubmitInputForm = e => {
    e.preventDefault();

    cardListDispatch({ type: 'CHANGE_ALIAS', payload: { alias, id: cardId } });
    navigate('../list', { replace: true });
  };

  const onChangeInput = e => {
    const {
      target: { value },
    } = e;
    if (value.length <= 30) {
      setAlias(value);
    }
  };

  return (
    <form className="card-input-form scroll-form" onSubmit={onSubmitInputForm} autoComplete="off">
      <div className="input-container flex-center w-100">
        <UnderlineInput value={alias} onChange={onChangeInput} />
      </div>
      <Position position="absolute" right="20px">
        <button className="button-box" disabled={isComplete === false}>
          <span className="button-text">다음</span>
        </button>
      </Position>
    </form>
  );
}

AliasInputForm.propTypes = {
  cardId: PropTypes.string,
  cardListDispatch: PropTypes.func,
};

export default AliasInputForm;
