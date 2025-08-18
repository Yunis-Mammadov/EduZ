import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import { getAllFaqs } from '../../../api/request';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../../../styles/main.scss"

const Faq = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const data = await getAllFaqs();
                setFaqs(Array.isArray(data) ? data : [data]);
            } catch (err) {
                console.error('Failed to fetch FAQs', err);
            }
        };

        fetchFaqs();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className='faq-section' data-aos="fade-up">
            <h1>Do you have any Questions?</h1>
            <div className='faq-container'>
                {faqs.map((faq, index) => (
                    <Accordion key={index} className='faq-card'>
                        <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography className='faq-questions'>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='faq-answer'>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default Faq;
