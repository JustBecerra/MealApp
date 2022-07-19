import {CATEGORIES} from '../data/dummy-data';
import {FlatList, ListRenderItem} from 'react-native';
import Category from '../models/category';
import React from 'react';
import CategoryGridTile from '../components/CategoryGridTile';

const Item = (data: Category) => {
  return <CategoryGridTile title={data.title} color={data.color} id={''} />;
};

const CategoriesScreen = () => {
  const renderItem: ListRenderItem<Category> = ({item}) => <Item {...item} />;
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default CategoriesScreen;
