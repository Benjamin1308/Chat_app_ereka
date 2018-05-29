import React from 'react';
import '../scss/StopBlockScreen.scss';
import history from '../constants/history';

const StopBlockScreen = ({ match }) => (
  <div className="stopBlockScreen">
    <div className="stopBlockPopup">
      <p className="popupTit">Bỏ chặn chat với {match.params.name}</p>
      <p className="popupContent">
        Khi bạn bỏ chặn, {match.params.name} có thể gửi yêu cầu chat tới bạn và đoạn chat (nếu có)
        trước đây của bạn với {match.params.name} sẽ được khôi phục.
      </p>
      <div className="btnGroup">
        <button onClick={history.goBack}>THÔI</button>
        <button onClick={history.goBack}>BỎ CHẶN</button>
      </div>{' '}
    </div>
  </div>
);
export default StopBlockScreen;
