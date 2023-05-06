import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import {ActivityIndicator, Dimensions, View, ScrollView} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';

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

  return (
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
          />
        </View>

        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Más vistas" movies={topRated} />
        <HorizontalSlider title="Próximas" movies={upcoming} />
        {/* <HorizontalSlider title="Próximamente" movies={peliculasEnCine} /> */}
      </View>
    </ScrollView>
  );
};
