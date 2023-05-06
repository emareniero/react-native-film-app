import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors'

import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, upcoming, topRated, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary, secondary]  = await getImageColors(uri)
    console.log({primary, secondary})
  };

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* <MoviePoster
        movie={peliculasEnCine[0]}
      /> */}

          {/* Carrucel Ppal */}
          <View
            style={{
              height: 440,
              // backgroundColor: "red"
            }}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Más vistas" movies={topRated} />
          <HorizontalSlider title="Próximas" movies={upcoming} />
          {/* <HorizontalSlider title="Próximamente" movies={peliculasEnCine} /> */}
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
