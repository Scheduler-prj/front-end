import React from 'react';
import { DesktopNavigation } from './DesktopNavigation';
import { TabletNavigation } from './TabletNavigation';
import useDeviceQueries from '../../hook/useDeviceQueries';

export const NavigationBar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const { isTablet } = useDeviceQueries();
    
    return isTablet ? (
        <TabletNavigation isLoggedIn={isLoggedIn} />
    ) : (
        <DesktopNavigation isLoggedIn={isLoggedIn} />
    );
};