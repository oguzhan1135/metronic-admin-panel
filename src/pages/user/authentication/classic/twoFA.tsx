import { Link } from "react-router"
import Card from "../../../../components/card/card"
import { useEffect, useRef, useState } from "react"
import Smartphone from '../../../../assets/icon/smartphone.svg'

const TwoFA = () => {

    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (!/^[0-9]?$/.test(value)) return;
        e.target.value = value;

        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        if (seconds === 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-authantication-bg bg-cover">
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <form action="#" className="flex flex-col gap-[30px] p-10 items-center">
                            <img src={Smartphone} />
                            <h3 className="text-b-18-18-500 text-gray-900">Verify your phone</h3>
                            <div className="flex flex-col gap-2.5 items-center">
                                <span className="text-b-13-14-400 text-gray-700">Enter the verification code we sent to</span>
                                <span className="text-b-14-14-500 text-gray-900">******7859</span>
                            </div>
                            <div className="flex flex-col gap-5 items-center">
                                <div className="flex flex-row items-center gap-2 justify-center">
                                    {[...Array(6)].map((_, i) => (
                                        <input
                                            key={i}
                                            maxLength={1}
                                            className="size-10 text-center border border-gray-300 rounded text-xl outline-[#D0E3F9] outline-1"
                                            onChange={(e) => handleChange(e, i)}
                                            onKeyDown={(e) => handleKeyDown(e, i)}
                                            ref={(el) => (inputRefs.current[i] = el)}
                                            type="text"
                                            inputMode="numeric"
                                        />
                                    ))}
                                </div>
                                <span className="text-b-13-14-400 text-gray-700">Didn't receive a code? ({seconds}s) <Link to={location} className="text-primary text-b-13-14-400">Resend</Link></span>
                            </div>
                            <button className="bg-primary flex items-center justify-center w-full text-white text-b-13-14-500 rounded-md py-[13px]">
                                Continue
                            </button>

                        </form>
                    </>
                }
            />
        </div>
    )
}
export default TwoFA