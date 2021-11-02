import Layout from '../components/Main/Layout'
import Header from '../components/Main/Header'
import Footer from '../components/Main/Footer'
import CitacoesCard from '../components/Main/CitacoesCard'

export default function Exterior() {
  return (
    <Layout title="Citações" description={`Jorge Carlos Fonseca: O Presidente de todos os Cabo-Verdianos 
    Citações de Jorge Carlos Fonseca relativas às Comunidades Cabo-verdianas no Exterior 2011 a 2021`}>
      <section className="h-screen w-screen max-w-screen-lg xl:max-w-screen-xl container mx-auto px-4" >
        <Header />
        
        <div className="mt-4 mb-32">
          <h2 className="mt-12 text-center text-3xl md:text-4xl text-textcolor leading-tight">
          Jorge Carlos Fonseca: O Presidente de todos os Cabo-Verdianos <br /> <br /> 
          <span className="text-2xl"> Citações de Jorge Carlos Fonseca relativas às Comunidades <br /> Cabo-verdianas no Exterior 2011 a 2021 </span>
          </h2>

          <CitacoesCard 
            text="Este é também o momento de lembrar com vigor, com agradecimento, o papel de extrema importância que a diáspora cabo-verdiana tem desempenhado no desenvolvimento de Cabo Verde e na consolidação da nossa democracia. A todos os cabo-verdianos residentes no exterior, a cada homem cabo-verdiano, a cada mulher cabo-verdiana espalhados pelo mundo envio as minhas saudações fraternais como Presidente da República de Cabo Verde e auspicio um breve regresso à terra mãe para matar saudades. A parcela da nação cabo-verdiana residente fora do país estará sempre no centro das atenções do Presidente da República, traduzidas primeiramente no reforço do seu sentimento de pertença a esta Nação, através do estímulo a acções que tenham em vista o recorte da identidade cultural e a ampliação da participação política. A integração nos países de acolhimento será igualmente uma das prioridades no âmbito das competências do Presidente da República enquanto mais alto representante da Nação cabo-verdiana. Tudo farei nessa direcção, concedendo uma atenção particular a comunidades residentes em alguns países e que se encontram em situação especialmente precária." 
            when="Jorge Carlos Fonseca, Discurso de Posse 1º Mandato, 9 de Setembro de 2011" 
          />
          <CitacoesCard 
            text="(…)Porque nós somos assim, quando nos reunimos, o momento é de júbilo e de regozijo, de risos e de lágrimas de alegria, de contar «partidas», de compartilhar e confirmar as notícias da terra mãe. É um dia dos afectos porque nos proporciona a todos um momento de reencontro entre amigas e amigos, num ambiente de confraternização que nos conduz à troca de impressões e de experiências e a um «matar de saudade», essa nossa «fininha melancolia» sempre presente em cada um de nós..." 
            when="Jantar com a comunidade cabo-verdiana em Lisboa, Junho de 2012" 
          />
          <CitacoesCard 
            text="Através dessa gente que trabalha, que vive, que ama, que estuda, que pesquisa, que sofre no estrangeiro e que no dia-a-dia abraço no meu pensamento e que, sempre que posso, beijo na face, o nosso país cresce, agiganta-se" 
            when="18 de Outubro de 2014" 
          />

          <CitacoesCard 
            text="Saúdo, neste dia, as comunidades cabo-verdianas espalhadas pelo mundo e que se afirmam, cada vez mais, como parte integrante da Nação cabo-verdiana, como participante activo em tudo aquilo a que esta Nação diz respeito, na plenitude dos seus direitos e deveres. A Diáspora cabo-verdiana exprime-se pelo seu profundo instinto de ligação à terra mãe e defende os valores de uma identidade que nunca se perder, mesmo a meio das vicissitudes de uma vida dedicada à perseguição do sonho de uma vida melhor para si e para os seus. A aceleração dos processos de aquisição da nacionalidade cabo-verdiana deve ser, nestes casos, prioridade máxima. A Integração das nossas comunidades nos países de acolhimento tem sido uma das minhas prioridades. Continuarei a exercer a minha magistratura de influência nessa direcção, concedendo uma atenção particular às comunidades que se encontram em situação especialmente precária." 
            when="18 de Outubro de 2014 " 
          />

          <CitacoesCard 
            text="São tantas gerações que muitas vezes nós, às vezes, não distinguimos o cabo-verdiano do santomense. Há milhares de descendentes de cabo-verdianos, há até quem diga que na Ilha do Príncipe a maioria da população é de origem cabo-verdiana e, no conjunto do arquipélago, os cabo-verdianos ocupam uma fatia importante dessa população." 
            when="São Tomé e Príncipe, Julho de 2015" 
          />

          <CitacoesCard 
            text="Neste dia que encerra particular simbolismo dirijo o meu pensamento aos largos milhares de cabo-verdianos que, fora das ilhas, com o seu trabalho, esforço e apego à terra e à cultura, contribuem para que a Nação seja, de facto, percebida na sua verdadeira dimensão. Este é um dia de união, de celebração, um dia em que todos, dentro e fora do país, nos sentimos mais cabo-verdianos. Aos que labutam no exterior, toda a minha admiração e simpatia." 
            when="5 de Julho de 2018" 
          />

          <CitacoesCard 
            text="Não há palavras para descrever a recepção oferecida pelas nossas gentes em Califórnia. O local repleto de cabo-verdianos nascidos no país, mas, sobretudo, das segunda e terceira gerações, foi palco de uma tremenda demonstração de apego às raízes. Entusiasmo, festa, música, abraços e beijos, palavras e gestos tocantes, lágrimas... ficarão seguramente retidos na minha memória momentos tão fortes, tão plenos de emotividade, tão singela e intensamente cabo-verdianos. Como lhes disse ontem à noite, depois das homenagens, tenho orgulho deles, tenho muito orgulho em ser o seu Presidente. Que bela, sólida, rica e inigualável “rede social” crioula! Agradeço, do fundo do coração, a todos, em especial aos integrantes do fantástico Caboverdean Strong California." 
            when="Los Angeles, California, 22 de Setembro de 2018" 
          />

          <CitacoesCard 
            text="Não é por acaso que a temática da emigração cabo-verdiana para a Holanda esteja bem presente no imaginário das nossas gentes. A música cabo-verdiana, sejam as composições mais animadas (coladeiras e funaná), sejam as mais nostálgicas como a morna – hoje candidata a Património Imaterial da Humanidade junto da UNESCO -, estão impregnadas da palavra Holanda, com referência honrosa a Suas Majestades, os Reis, e ao povo, em geral, num gesto de reconhecimento e divulgação das vantagens da emigração, mas também de lamento e saudade da terra mátria e da separação forçada da família que ficava para trás" 
            when="Amsterdão, 12 Dezembro de 2018" 
          />

          <CitacoesCard 
            text="Entendi valer a pena redigir um curto comentário à visita de Estado que efectuei aos Países-Baixos a convite de Sua Majestade o Rei Willem Alexander. Diria que fomos principescamente recebidos pelos Reis holandeses. O Rei Guilherme Alexandre Claus Jorge Fernando e a Rainha Maxima nos brindam com um banquete e um encontro para diálogo sobre o relacionamento entre Holanda e Cabo Verde, a presença da nossa comunidade na Holanda e o futuro da cooperação entre os dois países, o Rei nos acompanha em visita a um estádio de futebol para cumprimentar, dialogar e conviver com dezenas e dezenas de crianças e adolescentes, muitas de origem cabo-verdiana, e, depois, num evento de apresentação e conversa com empreendedores, artistas, jovens talentos de origem cabo-verdiana, dispondo-se até a sentar-se, repetidamente, em mesas para diálogo estreito com a nossa gente mais jovem e empreendedora, evento também com música e dança cabo-verdianas; … o Rei e a Rainha aceitam o nosso convite e participam vivamente connosco num concerto musica (excelente momento proporcionado por nossos exímios músicos) com a presença de cerca de duzentas pessoa, a maioria constituída por cabo-verdianos residentes em Rotterdam), conversando descontraidamente com os nossos convidados." 
            when="Amesterdão, 12 de Dezembro de 2018" 
          />

          <CitacoesCard 
            text="Além disso, o teor dos discursos (seja do Rei, seja do Primeiro Ministro ou das outras altas personalidades contactadas) com referências muito elogiosas à comunidade cabo-verdiana, ao nosso país e à sua democracia, o conhecimento que o Casal Real, durante os encontros havidos, demonstrava ter e pretender ter sobre o percurso histórico e político de Cabo Verde, o modo-de-ser dos cabo-verdianos, a sua cultura, revelaram uma atitude de muito respeito e consideração para connosco, o nosso país, as nossas gentes" 
            when="Amesterdão,  12 de Dezembro de 2018" 
          />

          <CitacoesCard 
            text="Como entender esta singular deferência, esta ímpar simpatia para connosco? Singelamente, creio, como uma homenagem à comunidade crioula na Holanda, a demonstração de respeito para com a nossa cultura e o nosso povo e de simpatia pelo nosso trajecto, nomeadamente a nossa democracia." 
            when="Amesterdão, 12 de Dezembro de 2018" 
          />

          <CitacoesCard 
            text="O país continuará a viver intensamente os sucessos dos nossos patrícios radicados no exterior. E neste dia 18 de Outubro, em que celebramos a Cultura e as Comunidades, envio calorosas saudações a todos aqueles que contribuem para que a nossa cabo-verdianidade brilhe lá onde quer que estejam. Que continuem a trabalhar para a sua preservação e sua singularidade, desta que é a nossa maior herança, que revela a nossa forma de pensar e agir." 
            when="18 de Outubro de 2018" 
          />

          <CitacoesCard 
            text="No estrito respeito pela Constituição da República, continuarei a envidar esforços no sentido de defender a adopção de medidas que facilitem adequada integração dos emigrantes cabo-verdianos nos países de acolhimento e, muito particularmente, das segundas gerações que enfrentam, em certos países, dificuldades de integração." 
            when="18 de Outubro de 2019" 
          />

          <CitacoesCard 
            text="Incito as nossas comunidades emigradas a continuarem a se afirmar como activos participantes, e não meros espectadores, desta grande e auspiciosa aventura de construir Cabo Verde, de consolidar a sua independência, a sua democracia, a sua liberdade e promover o bem-estar do seu povo, colocando o seu saber, a sua competência, o seu empenho ao serviço do desenvolvimento desta Pátria que é de todos nós." 
            when="18 de Outubro de 2019" 
          />

          <CitacoesCard 
            text="Digno de realçar que os sucessivos governantes cabo-verdianos souberam reforçar e aprimorar as políticas de emigração então forjadas e, com intenso trabalho, no país, junto das autoridades dos países de acolhimento, neste caso, as autoridades portuguesas, em tempos particularmente exigentes, ganhos significativos foram alcançados junto das nossas comunidades, estando na linha da frente as Associações cabo-verdianas e os líderes associativos que se mantiveram fiéis à nobre missão de unir os cabo-verdianos à terra mátria e de promover as condições de vida, a boa integração das nossas gentes, com foco especial nos mais vulneráveis. Nesses “cantinhos de Cabo Verde” e centros de congregação da comunidade, um pouco por todo o mundo, mulheres e homens conscientes trabalharam -  e trabalham - com notável dedicação para o engrandecimento da Nação cabo-verdiana. Patrícios excepcionais, autênticos líderes da participação associativa e verdadeiros embaixadores de boa vontade, enfrentaram ventos e marés no seu afã de recriar Cabo Verde junto das gentes das ilhas, trabalhadores ou estudantes, em busca de uma vida melhor." 
            when="Conferencia Internacional sobre o Associativismo cabo-verdiano em Portugal, Fevereiro de 2020." 
          />

          <CitacoesCard 
            text="Sendo a nossa diáspora, pela sua composição e pelo seu número um repositório de capacidades, de experiências e de ideias, tantas delas colocadas com sucesso ao serviço do desenvolvimento dos países de destino, como entender que o contributo dessa diáspora não seja integrado numa estratégia de desenvolvimento para Cabo Verde?" 
            when="18 de Outubro de 2020." 
          />

          <CitacoesCard 
            text="Se a nação cabo-verdiana se exprime pela unidade da língua, da cultura, de hábitos, de instinto de ligação à terra mãe e pela unidade de projecto quanto ao futuro, a ninguém mais do que a um  cabo-verdiano da emigração deve ser reconhecida a pertença a essa grande família sócio-política. Na perseguição do sonho de uma vida melhor, tantas vezes transformado numa poderosa desilusão, partiram os cabo-verdianos para os Estados Unidos, para o Senegal, para o Brasil, para a Argentina, para São Tomé, para Guiné, para Angola, para Moçambique e, mais modernamente, à descoberta da Europa e, todos eles estão aqui. Constitui este conjunto humano assim distribuído pelas sete partidas do mundo, em termos estatísticos, o dobro da nossa população residente nas ilhas; ela não é um excedente da nação, mas sim constitutiva à nação. Somos, pois, um Estado cuja nação ultrapassa largamente o seu território físico." 
            when="18 de Outubro de 2020." 
          />

          <CitacoesCard 
            text="«Se a nação cabo-verdiana se exprime pela unidade da língua, da cultura, de hábitos, de instinto de ligação à terra mãe e pela unidade de projecto quanto ao futuro, a ninguém mais do que a um  cabo-verdiano da emigração deve ser reconhecida a pertença a essa grande família sócio-política. Na perseguição do sonho de uma vida melhor, tantas vezes transformado numa poderosa desilusão, partiram os cabo-verdianos para os Estados Unidos, para o Senegal, para o Brasil, para a Argentina, para São Tomé, para Guiné, para Angola, para Moçambique e, mais modernamente, à descoberta da Europa e, todos eles estão aqui. Constitui este conjunto humano assim distribuído pelas sete partidas do mundo, em termos estatísticos, o dobro da nossa população residente nas ilhas; ela não é um excedente da nação, mas sim constitutiva à nação. Somos, pois, um Estado cuja nação ultrapassa largamente o seu território físico." 
            when="18 de Outubro de 2020." 
          />
        </div>
      </section>
      <Footer 
       title1={<a className="text-base text-textcolor opacity-50 font-bold">Introdução </a>} link1="/introducao"
       title2={<a className="text-base text-textcolor opacity-50 font-bold">As Comunidades Cabo-verdianas no Exterior </a>} link2=""
       title3={<a className="font-bold text-base text-textcolor">O Presidente da República e suas citações </a>} link3=""
      />
    </Layout>
  )
}
