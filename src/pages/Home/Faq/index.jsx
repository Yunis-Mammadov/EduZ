import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import { getAllFaqs } from '../../../api/request';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/main.scss'


const Faq = () => {

    const [faqs, setFaqs] = useState([]);


    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const data = await getAllFaqs();
                console.log('Data from API:', data);
                if (!Array.isArray(data)) {
                    setFaqs([data]);
                } else {
                    setFaqs(data);
                }
            } catch (err) {
                console.error('Failed', err);
            }
        };

        fetchFaqs();
    }, []);


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []); useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    return (
        <div className='faq-section' data-aos="fade-up">
            <h1>Do you have any Questions?</h1>
            <div className='faq-container'>
                {faqs.map((faq, index) => (
                    <Accordion key={index} sx={{
                        boxShadow: 'rgba(50, 50, 93, 0.35) -6px 6px 12px -2px, rgba(0, 0, 0, 0.3) 10px 4px 7px -3px;'
                    }}>
                        <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography className='faq-questions' component="span">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='faq-answer'>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div >
    )
}

export default Faq
