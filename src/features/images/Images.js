import { useDispatch, useSelector } from 'react-redux';
import { selectImages, selectImagesLoading, fetchImage } from './imageSlice';
import { backgroundImageStyle } from './imageStyle';
import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

export function Images() {
    const dispatch = useDispatch();
    let images = useSelector(selectImages);

    useEffect(() => {
        dispatch(fetchImage());
    }, []);

     
    
        return (
            <Carousel
                autoPlay={false}
                indicators={false}
                navButtonsAlwaysVisible={true}
                animation="slide"
            >
                {images.map(image => <img style={backgroundImageStyle} src={image.urls.regular} key={image.id} alt={image.alt_description} />)}
            </Carousel>
        );
    
    
    
}