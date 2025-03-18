import Button from './Button';
import KPoplist from './KPoplist';

function Main(){
  return (
    <main>
      <Button>레드벨벳 노래 찾기</Button>
      <Button>남자 아티스트 노래 찾기</Button>
      <Button>여자 아티스트 노래 찾기</Button>
      <KPoplist />
    </main>
  );
}

export default Main;