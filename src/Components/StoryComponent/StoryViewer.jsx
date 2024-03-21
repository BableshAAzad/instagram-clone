import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Progressbar from './Progressbar';

let StoryViewerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2b2929;`;

let StoryImage = styled.img`
    max-height: 90vh;
    object-fit: contain;`;

function StoryViewer({ stories }) {
    let [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    let [activeIndex, setActiveIndex] = useState(0);

    let handleNextStory = () => {
        if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
            setActiveIndex(activeIndex + 1);
        } else if (currentStoryIndex === stories.length - 1) {
            setCurrentStoryIndex(0);
            setActiveIndex(0);
        }
    }
    useEffect(() => {
        let interval = setInterval(() => { handleNextStory() }, 2000);
        return () => clearInterval(interval);
    }, [currentStoryIndex])
    return (
        <div className='relative w-full'>
            <StoryViewerContainer>
                <StoryImage src={stories?.[currentStoryIndex].image} alt="notLoaded" />
                <div className='absolute top-0 flex w-full'>
                    {stories.map((item, index) => <Progressbar key={index} index={index} activeIndex={activeIndex} duration={2000} />)}
                </div>
            </StoryViewerContainer>
        </div>
    )
}

export default StoryViewer
