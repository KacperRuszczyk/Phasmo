import CheckBox from './CheckBox';
import Stopwatch from './Stopwatch';
import "./BottomContainer.scss"
export default function BottomContainer(){
    return(
        <div className="BottomContainer">
            <CheckBox/>
            <Stopwatch/>
        </div>
    );
}