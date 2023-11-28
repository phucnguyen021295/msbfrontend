import React, {lazy} from 'react';
import { Routes, Route } from "react-router-dom";

// Components
const Home = lazy(() => import('../../screens/Home'))
const AccountManagement = lazy(() => import('../../screens/AccountManagement'))
const NoMatch = lazy(() => import('../../screens/NoMatch'))

const ContentApp: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/management" element={<AccountManagement />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}

export default ContentApp;