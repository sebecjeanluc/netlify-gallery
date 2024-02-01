// eslint-disable-next-line no-unused-vars
import characterData from '../data/characterData.json';
import Character from './Character';

function CharacterGallery(){

  return (
    <div>
        {
          characterData.map(character => {
            <Character
              key={character.id}
              name={character.name}
              imgUrl={character.imgUrl}
              birth={character.birth}
              race={character.race}
              gender={character.gender}
              spouse={character.spouse}
              hair={character.hair}
              death={character.death}
              realm={character.realm}
            />
          })
        }
    </div>
    )
}

export default CharacterGallery
