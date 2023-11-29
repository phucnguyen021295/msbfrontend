import React, {lazy, Suspense} from 'react';
import {Routes, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

// Components
const Home = lazy(() => import('../../screens/Home'));
const AccountManagement = lazy(() => import('../../screens/AccountManagement'));
const NoMatch = lazy(() => import('../../screens/NoMatch'));

const ContentApp: React.FC = () => {
    const token = useSelector((state: RootState) => state.user.token);

    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Todo: Route màn hình Home */}
                {token && <Route path="/management/*" element={<AccountManagement />} />} {/* Todo: Check đăng nhập bằng giá trị token thì mới cho vào màn Quản lý tài khoản */}
                <Route path="*" element={<NoMatch />} /> {/* Todo: Route đến màn hình không có trong quản lý Routes */}
            </Routes>
        </Suspense>
    )
}

export default React.memo(ContentApp);