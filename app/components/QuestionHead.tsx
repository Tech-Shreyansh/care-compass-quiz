import React from 'react';
import Image from "next/image";

interface Question {
    number: number;
}

const QuestionHead: React.FC<Question> = (props) => {
    return (
        <div className="space-x-2 pb-4">
            <Image
                src={"/questionMark.svg"}
                height={25}
                width={25}
                alt="ques"
                className="inline-block"
            />
            <span className="text-[#199388] text-sm">Question {`${props.number}`}</span>
        </div>
    );
};

export default QuestionHead;
