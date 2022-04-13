import { NextPage } from 'next/types';
import { api } from '../../services/api';
import { Character } from '../../types';

const Home: NextPage<{ characters: Character }> = ({ characters }) => {
  return (
    <div>
      {characters.results.map((character) => {
        return <div key={character.id}>{character.name}</div>;
      })}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(`${api}/character`);

  if (response.status !== 200) {
    throw new Error('something wrong with the api. try again later');
  }

  const characters = await response.json();

  return {
    props: {
      characters
    }
  };
}

export default Home;
