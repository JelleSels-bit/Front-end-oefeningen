import {type FunctionComponent, useState} from "react";
import CarouselContainer from "./carouselContainer.tsx";
import ControlButton from "./controlButton.tsx";
import getRandomImage from "./images.ts";


const ExerciseEight: FunctionComponent = () => {

    const [index, setIndex] = useState(0)

    const images: string[] = []

    for (let i = 0 ; i < 5 ; i++)
    {
        const imageToAdd: string = getRandomImage()
        images.push(imageToAdd)
    }

    const goNext = () => {
        if (index == images.length - 1)
            setIndex(0)
        else
            setIndex(index + 1)
    }

    const goPrev = () => {
        if (index == 0)
            setIndex(images.length - 1)
        else
            setIndex(index - 1)
    }

    return (
    <div>
        <CarouselContainer>
            <ControlButton onClick={goNext} $prev={false}>&gt;</ControlButton>
            <img src={images[index]} alt={images[index]} ></img>
            <ControlButton onClick={goPrev} $prev={true}>&lt;</ControlButton>
        </CarouselContainer>
    </div>
    )
}

export default ExerciseEight