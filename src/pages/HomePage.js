import React from 'react';
import { Content, ContentForm } from './styles';

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

          <section>
            <button type='submit'>Salvar</button>
          </section>
        </form>
      </ContentForm>
    </Content>
  );
}

export default HomePage;
