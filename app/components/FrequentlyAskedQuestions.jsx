"use client"
import { useState } from 'react';

function FrequentlyAskedQuestions() {
    const [expandedIndex, setExpandedIndex] = useState(null); // State to track which question is expanded

    // FAQ data with questions and answers
    const faqData = [
        { question: 'Is my personal information safe at Eternal Slots?', answer: "Yes, we take the security and privacy of our players' personal information very seriously. We use the latest encryption technology to ensure that all information is kept safe and secure." },
        { question: "What is the minimum age requirement to play at Eternal Slots?", answer: "The minimum age requirement to play at Eternal Slots is 18 years old or the legal age for gambling in your jurisdiction, whichever is higher. We take underage gambling very seriously and have strict measures in place to prevent it." },
        { question: "Can I play games at Eternal Slots for free?", answer: "Yes, most games at Eternal Slots have a demo mode that allows you to play for free without risking any real money. This is a great way to try out new games or practice your skills before playing for real." },
        { question: "How do I contact customer support at Eternal Slots?", answer: "You can contact customer support at Eternal Slots via live chat or email. Our support team is available 24/7 to assist you with any questions or concerns you may have." },
        { question: "Can I play Eternal Slots on my mobile device?", answer: "Yes, Eternal Slots is fully optimized for mobile play. You can enjoy all your favorite games on your smartphone or tablet, wherever you are." },
        { question: "Are there any restrictions on who can play at Eternal Slots?", answer: "While most players are welcome at Eternal Slots, there may be restrictions based on your country of residence. We recommend checking our terms and conditions or contacting customer support for more information." },
        { question: "What currencies are accepted at Eternal Slots?", answer: "Eternal Slots accepts a variety of currencies, including cryptocurrencies like Bitcoin and Litecoin, as well as traditional fiat currencies." },
        { question: "How do I know that the games at Eternal Slots are fair?", answer: "All games at Eternal Slots are tested and certified by third-party auditors to ensure fairness and randomness. This means that you can play with confidence, knowing that the games are fair and unbiased." },
        { question: "Can I set limits on my deposits at Eternal Slots?", answer: "Yes, Eternal Slots offers a range of responsible gaming tools, including deposit limits, to help you manage your gaming activity. You can set limits on your deposits to help you stay in control." },
        { question: "Can I play at Eternal Slots if I have a gambling problem?", answer: "We take responsible gambling seriously at Eternal Slots. If you feel that you may have a gambling problem, we encourage you to reach out to our customer support team for assistance. We also offer self-exclusion options to help you control your gaming activity." }
    ];

    // Function to handle click on a question
    const handleQuestionClick = (index) => {
        if (expandedIndex === index) {
            // If clicked on the same question again, collapse it
            setExpandedIndex(null);
        } else {
            // Otherwise, expand the clicked question
            setExpandedIndex(index);
        }
    };

    return (
        <div className="p-[30px] mt-50px faq-container w-full text-white bg-bgBannerColor rounded-[20px] border border-loginColor">
            <h2 className='font-semibold text-2xl mb-20px'>FAQ</h2>
            {faqData.map((item, index) => (
                <>
                <div key={index} className="p-10px faq-item w-full mb-20px rounded-[10px] hover:bg-loginColor cursor-pointer">
                    <div className="question" onClick={() => handleQuestionClick(index)}>
                        <h3 className='font-semibold'>{item.question}</h3>
                    </div>
                </div>
                <div>
                    {expandedIndex === index && (
                    <div className="answer my-[30px] text-sm">{item.answer}</div>
                    )}
                </div>
                </>
            ))}
        </div>
    );
}

export default FrequentlyAskedQuestions;