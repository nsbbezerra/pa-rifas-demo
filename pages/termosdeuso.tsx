import type { NextPage } from "next";
import Image from "next/image";
import { Fragment } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Tdu: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <div className="container mx-auto mt-16 px-5 lg:px-28 xl:px-32">
        <div className="rounded-md p-5 border-x border-y lg:p-10 xl:p-16">
          <div className="flex items-center justify-center">
            <div className="w-32">
              <Image
                src="/img/logo.svg"
                width={446}
                height={446}
                layout="responsive"
                alt="PA Rifas, rifas online"
              />
            </div>
          </div>
          <h1 className="text-center font-bold text-green-500 text-4xl mt-5">
            TERMOS DE USO
          </h1>
          <span className="text-center w-full block">PA RIFAS</span>

          <div className="text-gray-700 mt-10 flex flex-col gap-2 text-justify">
            <h2 className="font-bold text-xl">1. INTRODUÇÃO</h2>
            <p>
              O termo a seguir é um contrato aceito aos seus utilizadores,
              estando assim de acordo com as regras descritas no mesmo.
            </p>
            <p>
              Ao utilizar o sistema PA Rifas, você declara-se de acordo com as
              regras vigentes.
            </p>
            <p>
              Aos organizadores e usuários declaram-se integralmente
              responsáveis por todos os atos praticados ao utilizar o sistema PA
              Rifas, sendo também responsável pela veracidade das informações
              fornecidas.
            </p>
            <p>
              Reservamo-nos o direito de efetuar o bloqueio, desativação ou
              exclusão no caso de descumprimento das regras impostas no presente
              termo.
            </p>

            <h2 className="font-bold text-xl">2. SOBRE O SERVIÇO</h2>

            <p>
              O sistema PA Rifas foi desenvolvido a fim de possibilitar a
              criação de campanhas de arrecadações beneficiárias.
            </p>

            <p>
              O sistema PA Rifas não se enquadra em uma plataforma de jogos. Os
              seus usuários e organizadores se conscientizam de que qualquer
              pagamento realizado é feito de forma espontânea e voluntária, não
              caracterizando relação com jogos de azar. A política de
              cancelamentos e reembolsos cabe à análise exclusiva da plataforma,
              isentando assim o criador da rifa.
            </p>

            <p>
              Caso haja algum caso de reembolso ou cancelamento de rifas, a
              plataforma aplicará suas próprias políticas de ressarcimento.
            </p>

            <h2 className="font-bold text-xl">3. CONDIÇÕES GERAIS DE USO</h2>

            <p>
              Aceite. Reconhece e concorda que ao utilizar o sistema PA Rifas,
              você estará de acordo independentemente de qualquer outro
              procedimento de aceitação a concordância total das regras
              descritas, em caso de não aceitação dos itens, diretrizes e
              condições previstas neste TERMO DE USO, você declara que não fará
              a utilização do sistema.
            </p>

            <p>
              Responsabilidade. Reconhece e concorda que a utilização do sistema
              é feito por sua conta exclusiva, riscos e responsabilidades e se
              compromete a utilizar o sistema e todas as suas ferramentas de
              acordo com a legislação vigente e este TERMO DE USO, abstendo-se
              ao seu uso indevido para práticas de atividades ilícitas ou que de
              qualquer forma esteja em desacordo com os direitos de terceiros.
            </p>

            <p>
              Usabilidade. Afirma que suas informações sigilosas de acesso ao
              sistema se manterão em segredo sendo assim de forma única e
              exclusiva a sua própria utilização, isentando o sistema PA Rifas
              de qualquer responsabilidade pelo uso indevido do sistema.
            </p>

            <h2 className="font-bold text-xl">
              4. CRIAÇÃO DAS ARRECADAÇÕES VOLUNTÁRIAS
            </h2>

            <p>
              {" "}
              Ao criar uma arrecadação voluntária o organizador declara que
              todas as informações fornecidas, incluindo, informações pessoais e
              bancárias e outras informações confidenciais descritas de sua
              propriedade ou relacionadas são verdadeiras, bem como qualquer
              atualização de seus dados devem ser expressamente ajustados no
              sistema.
            </p>

            <p>
              O uso do sistema é exclusivo para usuários e organizadores com 18
              anos ou mais.
            </p>

            <p>
              Após criar a arrecadação não será possível editar todos os dados,
              a fim de garantir a coerência das informações e garantindo que não
              haverá troca de prêmios ou valores. No entanto o organizador
              poderá alterar fotos, datas e algumas outras informações que não
              ocasionará divergências da proposta descrita inicialmente,
              mediante petição à equipe do PA Rifas.
            </p>

            <p>
              A criação da rifa terá uma comissão arrecadada pela plataforma,
              taxa de pagamentos bancários, todas estas taxas estão
              estabelecidas na seção de criação de Rifa.
            </p>

            <p>
              O Valor arrecadado permanecerá bloqueado até o criador da Rifa
              confirmar o sorteio e indicar tanto por parte dele mesmo quanto
              por parte do sorteado a entrega e o recebimento do prêmio, esta
              confirmação se dará por fotos e vídeos, dependendo do que a equipe
              da PA Rifas requerer.
            </p>

            <p>
              O organizador terá um prazo extra de 15 (Quinze) dias após o
              vencimento do prazo para o sorteio para efetuar o mesmo, caso não
              haja o cumprimento deste item a rifa será bloqueada.
            </p>

            <h2 className="font-bold text-xl">5. CRÉDITOS DO ORGANIZADOR</h2>
            <p>
              O organizador responsável poderá consultar seus créditos a
              qualquer momento, através das ferramentas disponíveis em nosso
              sistema ou outros meios que venhamos a disponibilizar.
            </p>

            <p>
              Os créditos arrecadados pelo organizador não sofrerão qualquer
              tipo de correção monetária, acréscimo de juros ou qualquer tipo de
              atualização financeira, permanecendo inalterados pelo tempo que
              for necessário. O PA Rifas não terá responsabilidade pela
              desvalorização ou desatualização monetária dos créditos de
              arrecadação mantidos.
            </p>

            <p>
              Aos organizadores fica de inteira responsabilidade sob o
              recebimento e confirmação dos números adquiridos pelos usuários, o
              nosso sistema é responsável por toda a transação ocorrida nas
              vendas das cotas.
            </p>

            <h2 className="font-bold text-xl">
              6. PARTICIPAÇÃO DOS USUÁRIOS VOLUNTÁRIOS
            </h2>

            <p>
              O PA Rifas recomenda aos seus usuários que participem apenas das
              ações de usuários que ele conheça e tenha uma relação de
              confiança. O PA Rifas, apenas oferece o sistema como um serviço
              para criação e gestão das campanhas não cabendo-nos qualquer tipo
              de responsabilidade sobre as ações realizadas por terceiros, sendo
              elas de total responsabilidade de seus organizadores.
            </p>

            <p>
              Responsabilidade pelos pagamentos. PIX, CARTÃO DE CRÉDITO E DÉBITO
              você concorda e reconhece que ao apoiar qualquer arrecadação, será
              feita de forma consciente e voluntária e de responsabilidade
              direta com os organizadores, portanto você é o único responsável
              pela referida doação que será efetuada de acordo com as
              informações fornecidas pelos organizadores.
            </p>

            <p>
              Por isso, antes de efetuar uma doação o usuário deve procurar
              obter todas as informações junto ao organizador buscando a
              veracidade das informações, origem e procedência dos produtos,
              devendo avaliar possíveis risco por sua conta no caso de
              prosseguir com a transação.
            </p>

            <h2 className="font-bold text-xl">7. PROIBIÇÕES</h2>

            <p>
              Não é permitido aos usuários e organizadores a utilização de
              contas fakes (falsas) com o intuito de prejudicar, enganar ou
              criar falsas expectativas aos usuários e organizadores.
            </p>

            <p>
              Não serão permitidas ações que ofereçam premiações com os itens:
              Serviços e produtos eróticos ou de conteúdo explícito, explosivos,
              armas de fogo, armas brancas, simulacros, medicamentos, produtos
              químicos ou de quaisquer outras origens que a administração julgue
              inapropriado, bem como produtos sem nota fiscal.
            </p>

            <p>
              Comprometimento. Compromete-se ao organizador a não transmitir,
              introduzir, difundir ou colocar à disposição de terceiros qualquer
              tipo de material ou informação (fotos, preços, mensagens, arquivos
              etc.) que sejam contrários a legislação e ao presente termo de
              uso.
            </p>

            <p>
              Não será permitido qualquer tipo de preconceito ou informações de
              cunho preconceituoso, ofensivo, ou violento na descrição das
              ações.
            </p>

            <h2 className="font-bold text-xl">8. DIREITOS PA RIFAS</h2>
            <p>
              Remoção. O seu exclusivo critério, as ações que não estejam de
              acordo com este TERMO DE USO e as leis vigentes, reservando-se ao
              direito de exclusão, bloqueio ou desativação do usuário ou
              organizador infrator.
            </p>

            <p>
              Validação. Com intuito de atender de melhor forma possível os
              requisitos de transparência e zelar pelo bom funcionamento do
              sistema, garantindo também a segurança de todos usuários e
              organizadores do sistema, podendo também executar a verificação e
              validação dos dados fornecidos a qualquer instante, essas
              validações não acarretam em qualquer compromisso, garantia,
              obrigação ou responsabilidade da PA Rifas, quanto a veracidade
              destas informações, que continuam sendo de responsabilidade de
              seus organizadores.
            </p>

            <p>
              Disponibilidade de informações. O PA Rifas não obriga-se a
              disponibilizar informações ou backup das ações que já foram
              realizadas, expiradas ou desativadas por qualquer motivo.
            </p>

            <h2 className="font-bold text-xl">
              9. CUSTOS DE CRIAÇÃO, MANUTENÇÃO, GESTÃO E CANCELAMENTOS
            </h2>
            <p>
              A criação, manutenção e gestão das ações possuem um preço fixo
              determinado para cada sorteio a ser ativado. Incluindo tarifas
              sobre pagamentos online conforme abaixo:
            </p>

            <p>
              Todas as ações a serem ativadas terão uma comissão pré
              estabelecida pelo plataforma sobre o sorteio, que incidirá no
              valor arrecadado.
            </p>

            <p>
              Cancelamentos. No caso de cancelamento por motivos do organizador
              não será repassado nenhum valor ao mesmo, porém, será sorteado um
              número de acordo com a Loteria Federal na data pré estabelecida
              pelo antigo organizador, o prêmio será 60% do valor arrecadado até
              o momento, o sorteio será realizado pela equipe da PA Rifas nas
              suas redes sociais.
            </p>

            <p>
              Desativados. No caso de desativação por descumprimento das regras
              ou qualquer outro motivo que venha a prejudicar as partes
              envolvidas, fica de inteira responsabilidade da PA Rifas,
              continuar o sorteio sendo que o prêmio passará a ser 60% do valor
              arrecadado até o momento do sorteio, o número ganhador será
              sorteado pela Loteria Federal.
            </p>

            <p>
              Qualquer ação que venha a ser cancelada ou desativada não haverá
              repasse do valor arrecadado até o momento do cancelamento ou
              desativação.
            </p>

            <h2 className="font-bold text-xl">
              10. TRANSFERÊNCIA DOS VALORES ARRECADADOS
            </h2>

            <p>
              Após a conclusão do sorteio, o PA Rifas entrará em contato com o
              ganhador para confirmar o recebimento do prêmio, assim como com o
              organizador.
            </p>

            <p>
              O ganhador terá 5 dias para manifestar-se sobre o recebimento do
              prêmio ou qualquer irregularidade. Caso o ganhador não se
              manifeste-se entende-se que não houve desacordos e ele concorda
              com o prêmio recebido.
            </p>

            <h2 className="font-bold text-xl">
              11. GARANTIAS E RESPONSABILIDADES
            </h2>
            <p>
              Disponibilidade de Nosso Atendimento. Nosso sistema depende de
              fatores externos que fogem ao nosso controle, tais como conexão de
              internet dos utilizadores, dispositivo utilizado para acesso.
              Dessa forma, o PA Rifas não garante a disponibilidade, acesso e
              continuidade das funcionalidades do sistema, não sendo responsável
              por nenhum dano ou prejuízo causado aos utilizadores em caso de
              indisponibilidade.
            </p>

            <p>
              Conduta dos utilizadores. O PA Rifas não garante que os seus
              utilizadores utilizem o sistema em conformidade com a lei e ao
              presente termo do mesmo modo não garantimos a veracidade e
              exatidão, esgotamento ou autenticidades dos dados disponibilizados
              pelos seus utilizadores. O mau uso da plataforma é de total
              responsabilidade de seus utilizadores, sob pena de lei e aos
              termos descritos.
            </p>

            <p>
              O PA Rifas não tem vínculo com nenhum de seus utilizadores, sendo
              assim a PA Rifas não se responsabilidade pelos negócios realizados
              entre seus usuários e organizadores, ambas as partes são
              responsáveis pelas próprias ações ou emissões, bem como qualquer
              erro, ou fraude.
            </p>

            <p>
              Tributação. Cada organizador e usuário são responsáveis pelas
              obrigações tributárias decorrentes de suas ações, respondendo a PA
              Rifas apenas pelas atividades desenvolvidas por si própria,
              observando os limites legais.
            </p>

            <p>
              Você concorda e reconhece que estão protegidos por direitos de
              propriedade intelectual do PA Rifas ou de terceiros e totalidade.
            </p>

            <h2 className="font-bold text-xl">12. DISPOSIÇÕES GERAIS</h2>
            <p>
              O termo de uso apresentado rege a relação entre usuários e
              organizadores do sistema PA Rifas, que poderá ser atualizado junto
              as demais regras vigentes nesse termo e as demais políticas
              relacionadas ao sistema PA Rifas. Havendo alterações das regras,
              ferramentas ou utilidades tais alterações entrarão em vigor
              imediatamente, sendo de responsabilidade de seus utilizadores a
              verificação de atualizações informadas no sistema.
            </p>

            <p>
              Direito de exclusão e solicitação de documentos. O sistema PA
              Rifas reserva o direito de recusar, alterar ou desativar o acesso
              ao sistema de qualquer utilizador que descumpra os termos sem a
              necessidade de um aviso prévio, bem como a solicitação de
              atualização de documentos e solicitação de documentos
              complementares, quando entender-se necessário para manutenção do
              cadastro dos seus utilizadores.
            </p>

            <p>
              Em caso de remoção do sistema e/ou suspensão ou cancelamentos por
              descumprimentos as regras vigentes ao presente termo de uso,
              eventuais valores ou taxas pagas não serão reembolsadas.
            </p>

            <p>
              Menores de idade. O uso do sistema fica restrito aos utilizadores
              com idade igual ou superior a 18 anos de idade.
            </p>

            <p>
              Prazo de utilização. A utilização do sistema PA Rifas fica
              definida por tempo indeterminado aos organizadores sem prejuízo as
              disposições anteriores, o PA Rifas reserva-se o direito de decidir
              sobre o encerramento, suspensão ou interrupção das ferramentas
              fornecidas, podendo fazê-lo unilateralmente e a qualquer momento
              sem obrigatoriedade de aviso prévio aos utilizadores.
            </p>

            <p>
              Renúncia ou desacordo das disposições. Qualquer omissão ou
              tolerância na exigência do fiel cumprimento do presente termo de
              uso ou das prerrogativas dele decorrentes, não constituirá novação
              ou renúncia, nem afetará o direito do PA Rifas em exercê-lo a
              qualquer instante. A renúncia ou desacordo desses direitos somente
              será válida se formalizada por escrito, bem como a nulidade ou
              invalidez de qualquer previsão desse termo de uso não prejudicarão
              a validade e eficácia das demais disposições.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Tdu;
