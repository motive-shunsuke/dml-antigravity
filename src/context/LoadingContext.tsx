"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

interface LoadingContextType {
    isOpening: boolean;
    isLogoMoving: boolean;
    finishOpening: () => void;
    startLogoMove: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpening, setIsOpening] = useState(true);
    const [isLogoMoving, setIsLogoMoving] = useState(false);

    const finishOpening = useCallback(() => setIsOpening(false), []);
    const startLogoMove = useCallback(() => setIsLogoMoving(true), []);

    return (
        <LoadingContext.Provider value={{ isOpening, isLogoMoving, finishOpening, startLogoMove }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};
