import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DarkBlue, Primary, White} from '../../styles/Colour';

const TitleHeader = ({onBack, title, share, isSearchBar, onSearch}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View
      style={[
        styles.containerHeader,
        isSearchBar && {backgroundColor: Primary},
      ]}>
      <View style={[styles.titleHeader, !isSearchBar ? {height: 40} : null]}>
        <TouchableOpacity onPress={onBack}>
          <Icon
            name="arrow-left"
            size={20}
            color={isSearchBar ? White : DarkBlue}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.textHeader,
              isSearchBar && {color: White, textAlign: 'left', marginLeft: 20},
            ]}>
            {title}
          </Text>
        </View>
        {share && (
          <TouchableOpacity onPress={share}>
            <Icon
              name="share-alt"
              size={20}
              color={isSearchBar ? White : DarkBlue}
            />
          </TouchableOpacity>
        )}
      </View>

      {isSearchBar && (
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Telusuri..."
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
            <Icon
              style={styles.searchIcon}
              name="search"
              size={20}
              color={DarkBlue}
              onPress={() => onSearch(searchText)}
            />
          </View>
          <TouchableOpacity style={styles.filter}>
            <Icon name="sliders" size={20} color={Primary} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: 21,
    backgroundColor: White,
    paddingVertical: 15,
    shadowColor: DarkBlue,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    elevation: 5,
  },
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    backgroundColor: White,
    borderRadius: 8,
    paddingLeft: 10,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    paddingHorizontal: 10,
    color: DarkBlue,
  },
  searchIcon: {
    marginRight: 10,
  },
  filter: {
    height: 48,
    width: 48,
    borderRadius: 8,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: DarkBlue,
    textAlign: 'center',
  },
});

export default TitleHeader;
