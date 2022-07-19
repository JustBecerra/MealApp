import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Category from '../models/category';

const CategoryGridTile = (props: Category) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
