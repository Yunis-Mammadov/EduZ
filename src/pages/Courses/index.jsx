import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import AOS from 'aos';
import '../../styles/main.scss';
import { getAllCards } from '../../api/request';
import { Helmet } from 'react-helmet';

const Courses = () => {
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  const [searchParams] = useSearchParams();
  const location = useLocation();


  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getAllCards();
        if (!Array.isArray(data)) {
          setCards([data]);
        } else {
          setCards(data);
        }

        const allCategories = ['All', ...new Set(data.map(card => card.catalog))];
        setCategories(allCategories);

        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl && allCategories.includes(categoryFromUrl)) {
          setSelectedCategory(categoryFromUrl);
        }
      } catch (err) {
        console.error('Failed', err);
      }
    };

    fetchCards();
  }, [searchParams]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const filteredCards =
    selectedCategory === 'All'
      ? cards
      : cards.filter(card => card.catalog === selectedCategory);

  const getDiscountedPrice = (card) => {
    if (card.isSale && card.discountPercentage > 0) {
      return card.price - (card.price * card.discountPercentage) / 100;
    }
    return card.price;
  };

  const sortedCards = [...filteredCards].sort((a, b) => {
    const priceA = getDiscountedPrice(a);
    const priceB = getDiscountedPrice(b);

    if (sortOption === 'priceLowHigh') {
      return priceA - priceB;
    } else if (sortOption === 'priceHighLow') {
      return priceB - priceA;
    } else if (sortOption === 'ratingHighLow') {
      return b.rating - a.rating;
    } else if (sortOption === 'discountHighLow') {
      return b.discountPercentage - a.discountPercentage;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className='courses-container'>
        <div className='courses-section' data-aos='fade-up'>
          <div className='courses-title'>
            <h1>Course Catalog</h1>
            <p>
              Through our platform, you can receive consulting in various fields
              from anywhere in the world and unlock your full potential.
            </p>
          </div>

          {/* Filter and Sort Dropdowns */}
          <div className='filter-container'>
            <div>
              <label htmlFor='category-filter'>Filter by Category:</label>
              <select
                id='category-filter'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor='sort-filter'>Sort by:</label>
              <select
                id='sort-filter'
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value='default'>Default</option>
                <option value='priceLowHigh'>Price: Low to High</option>
                <option value='priceHighLow'>Price: High to Low</option>
                <option value='ratingHighLow'>Rating: High to Low</option>
              </select>
            </div>
          </div>

          <div className='courses-cards'>
            {sortedCards.map((card, index) => (
              <Link
                target='_blank'
                to='https://www.udemy.com'
                key={index}
                style={{ color: 'black' }}
              >
                <div className='cards-parent'>
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    data-aos="fade-left"
                    data-aos-delay={index * 50}
                    data-aos-duration="500"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '250px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      imageRendering: 'auto',
                    }}
                  />
                  <div className='cards-info'>
                    <h3>{card.title}</h3>
                    <p>{card.author}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <h4 style={{ color: '#faaf00', fontWeight: '700', fontSize: '15px' }}>
                        {card.rating}
                      </h4>
                      <Rating
                        name='read-only'
                        value={Number(card.rating)}
                        precision={0.1}
                        readOnly
                        size='small'
                      />
                    </div>
                    <h3>
                      {card.isSale && card.discountPercentage > 0 ? (
                        <>
                          <span style={{ color: 'green', fontWeight: 600, marginRight: 8 }}>
                            ${((card.price - (card.price * card.discountPercentage) / 100) * 100 / 100).toFixed(2)}
                          </span>
                          <span style={{ textDecoration: 'line-through', color: 'gray' }}>
                            {card.price}$
                          </span>
                        </>
                      ) : (
                        <span>{card.price}$</span>
                      )}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Helmet>
        <title>Courses</title>
        <meta name="description" content="Courses Page" />
      </Helmet>
    </>
  );
};

export default Courses;
