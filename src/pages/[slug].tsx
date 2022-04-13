import { GetServerSideProps, NextPage } from 'next/types';
import { api } from '../../services/api';
import { Character } from '../../types';

const CharacterPagination: NextPage<{ characters: Character }> = ({
  characters
}) => {
  // console.log(characters);
  return (
    <div>
      {characters.results.map((character, i) => {
        return <div key={i}>{character.name}</div>;
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug?.toString();

  if (!slug || isNaN(+slug)) {
    return {
      notFound: true
    };
  }

  const response = await fetch(`${api}/character?page=${slug}`);

  if (response.status === 404) {
    return {
      notFound: true
    };
  }

  if (response.status !== 200) {
    throw new Error(`Ooops!!!! ${response.statusText}`);
  }

  const characters = await response.json();

  return {
    props: {
      characters
    }
  };
};

export default CharacterPagination;
