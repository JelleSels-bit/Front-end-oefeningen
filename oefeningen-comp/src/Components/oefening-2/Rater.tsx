import type {FunctionComponent} from "react";
import Label from "./Label.tsx";
import RatingGuideData from "../../Data/RatingGuideData.tsx";
import Star from "./Star.tsx";

interface Props {
    rating: number;
    max: number;
}

const Rater: FunctionComponent<Props> = ({rating, max}) => {
    const score = rating / max;

    return (

        <div className={'rater'}>
            <Label data={RatingGuideData} score={score}></Label>
            <Star rating={rating} max={max}></Star>

        </div>
    )
}

export default Rater;