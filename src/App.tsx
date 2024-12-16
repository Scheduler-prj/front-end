// import React from 'react';
//
// const App = () => {
//     return (
//         <div>
//           test
//         </div>
//     );
// };
//
// export default App;

import React from "react";
import {GlobalStyle} from "./styles/GlobalStyle";
import { H1, H2, T1, T2 } from "./styles/Typography";

const App = () => {
    return (
        <>
            {/* Global Style 적용 */}
            <GlobalStyle />
            <div>
                {/* Typography 컴포넌트로 폰트 테스트 */}
                <H1>Test Font - H1</H1>
                <H2>Test Font - H2</H2>
                <T1>Test Font - T1</T1>
                <T2>Test Font - T2</T2>
                <p style={{ fontFamily: "'Pretendard', Arial, sans-serif" }}>
                    Custom Font Test (Inline Style)
                </p>
            </div>
        </>
    );
};

export default App;
