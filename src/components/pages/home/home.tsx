import { H1 } from '../../typography/headline/h1';
import { PostIt } from '../post-it/post-it';
import { HomeContainer } from './home-style';

export function Home() {
  return (
    <HomeContainer>
      <PostIt>
        <H1>
          LEIA UM <br />
          SEGREDO <br />
        </H1>
      </PostIt>

      <PostIt>
        <H1>
          DEIXE UM <br />
          SEGREDO
        </H1>
      </PostIt>
    </HomeContainer>
  );
}
