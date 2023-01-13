import './carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const BestSellers = () => {
  const products = [
    {
      image: 'https://images.indianexpress.com/2023/01/Modi-new-1.jpg?resize=450,250',
      text: 'World in crisis, PM Modi tells global south',
    },
    {
      image: 'https://images.indianexpress.com/2023/01/bhupendra-yadav-1-2.jpg?resize=450,250',
      text: 'Developing countries not responsible for climate change: Bhupendar Yadav',
    },
    {
      image: 'https://images.indianexpress.com/2023/01/joshimath-11.jpg?resize=450,250',
      text: 'Joshimath crisis: Uttarkhand',
    },
    {
      image: 'https://images.indianexpress.com/2023/01/Manoj-Pande-1.jpg?resize=450,250',
      text: 'Amid war, identifying sources for Soviet-era equipment spares: Army Chief',
    },
    {
      image: 'https://images.indianexpress.com/2023/01/Hemant-Soren-1.jpg?resize=450,250',
      text: 'Money laundering an independent offence, says HC',
    },
    {
      image:
        'https://images.indianexpress.com/2023/01/election-commission-1200-1.jpg?resize=450,250',
      text: 'Have enforced mechanism to monitor poll expenditure, EC tells SC',
    },
    {
      image: 'https://images.indianexpress.com/2023/01/Emenox-2col-1.jpg?resize=450,250',
      text: 'WHO flags two syrups by Noida firm that was linked to Uzbek kids’ deaths',
    },
    {
      image: 'https://images.indianexpress.com/2023/01/Sharad-Yadav.jpg',
      text: 'Sharad Yadav passes away at 75; PM Modi, Nitish Kumar and others condole death',
    },
  ];

  return (
    <div className="best-sellers-wrap">
      <Carousel responsive={responsive}>
        {products.map(prod => (
          <div className="carousel-card">
            <img alt="any" src={prod.image} height="100%" width="100%" />
            <div className="centered">{prod.text}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BestSellers;
