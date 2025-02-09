import { objectToString } from '../../../utils/util';
import { CARD_TYPE } from '../../../utils/constants';

function Card({ cardNumber, expirationDate, ownerName, cardType }) {
  return (
    <div className="card-box">
      <div
        className="small-card"
        style={{
          backgroundColor: CARD_TYPE[cardType]?.color ?? '#e5e5e5',
        }}
      >
        <div className="card-top">
          <span className="card-text">{CARD_TYPE[cardType]?.name ?? '카드사를 선택해주세요'}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">
              {objectToString({ targetObject: cardNumber, separator: ' ', hideStartIndex: 2 })}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text owner-name">{ownerName}</span>
            <span className="card-text">
              {objectToString({ targetObject: expirationDate, separator: '/' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
