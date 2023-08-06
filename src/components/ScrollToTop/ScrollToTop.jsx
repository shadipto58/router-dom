/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {

    const { pathName } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathName])

    return null;
};

export default ScrollToTop;