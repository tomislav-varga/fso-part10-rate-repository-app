import { Text, View } from 'react-native';

const formatNumber = (number) => {
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}k`;
  }
  return number.toString();
};

const RepositoryItem = ({ repository }) => {
  return (
    <View>
      <View>
        <View>
          <Text>{repository.fullName}</Text>
          <Text>{repository.description}</Text>
          <Text>{repository.language}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>{formatNumber(repository.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text>{formatNumber(repository.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text>{repository.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text>{repository.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;