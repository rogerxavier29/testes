import React from 'react';
import { Content, ContentForm } from './styles';
import Button from './components/Button';

function HomePage() {
  return (
    <Content>
      <p>
        aokdsopakaopfksdopkfpsodfopsdkfksfskdfskodfopsdkfpkdfok
        dsfsdifkdsokfosdkfodskfpsdokfposdkfopdskfopsdkfpodspfoksdpokfops
        sdfsdfdsfsdfksd´kf´sdpkf´dsf´skdf´ksdfd´skf´sdpkf´psdkfpd´sf´ps
        sdfksdokfsdkfosdkfposdkfpsodkfpsokfopsdkfopksdkfos
        sdfksdopkfsdpokfpdsofposdofpksopkfspkofsdop oi
      </p>

      <ContentForm>
        <form action=''>
          <div>
            <input type='text' />
          </div>
          <div>
            <input type='text' />
          </div>
          <div>
            <input type='text' />
          </div>

          <Button />
        </form>
      </ContentForm>
    </Content>
  );
}

export default HomePage;
