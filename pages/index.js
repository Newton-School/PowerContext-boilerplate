"use client"
import PowerSwitcher from '../components/PowerSwitcher';
import { usePower } from '../contexts/PowerContext';


const Home = () => {
    const { power, inputValue } = usePower();

    const content = {
        1: {
            value: inputValue
        },
        2: {
            value: inputValue
        },
        3: {
            value: inputValue
        }

    };




    return (
        <div>

            <h1>{content[power].value}</h1>

            <PowerSwitcher />
        </div>
    );
};

export default Home;
