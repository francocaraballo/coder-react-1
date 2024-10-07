import { Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'Remeras',
    imageUrl: 'https://i.postimg.cc/SKJqgn5G/grid-remeras.jpg',
    link: '/category/remera',
  },
  {
    id: 2,
    title: 'Calzas',
    imageUrl: 'https://i.postimg.cc/4yTg4B38/grid-calzas.jpg',
    link: '/category/calza',
  },
  {
    id: 3,
    title: 'Shorts',
    imageUrl: 'https://i.postimg.cc/Ss94pwm2/grid-shorts.jpg',
    link: '/category/short',
  },
  {
    id: 4,
    title: 'Tops',
    imageUrl: 'https://i.postimg.cc/1z2S2911/grid-tops.jpg',
    link: '/category/top',
  },
  {
    id: 5,
    title: 'Medias',
    imageUrl: 'https://i.postimg.cc/ZnFhWpBJ/grid-medias.jpg',
    link: '/category/medias',
  },
];

export const HomeCategories = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Categorias</h2>
      <div className='flex flex-col lg:flex-row justify-items-center gap-4'>
        {categories.map((category) => (
          <div
            key={category.id}
            className='relative overflow-hidden rounded-lg shadow-lg group'
          >
            <Image
              src={category.imageUrl}
              alt={category.title}
              className='object-cover w-full lg:w-96 h-96 transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50' />
            <Link to={category.link}>
              <div className='absolute inset-0 flex flex-col items-center justify-center p-4'>
                <Button colorScheme='whiteAlpha' variant='ghost'>
                  <h3 className='text-white text-2xl font-bold text-center'>
                    {category.title}
                  </h3>
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
