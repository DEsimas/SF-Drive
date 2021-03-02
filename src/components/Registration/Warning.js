import React from "react";

import "./../../styles/Registration/Warning.scss";

function Warning(props) {
	return (
		<>
            <div id="alert" className="alert hide">
                <span className="alert__name">Не удалось продолжить регистрацию. Попробуйте ещё раз</span>
            </div>
        </> 
	);
}

export default Warning;