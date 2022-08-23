import { MdBrandingWatermark } from "react-icons/md"
import Header from "../components/Header"
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import styleMain from './styles/services.module.css'
import Link from "next/link"
import Image from "next/image"

const Plans = () => {
	return (
		<main className={styleMain.container}>
			<Header title="Enterprise Cyber Defense" />
			<Menu />
			<section className={styleMain.containerOther} style={{ marginTop: '4rem' }}>
				<div className={styleMain.row}>
					<div className={styleMain.rowContent}>
						<h2 className={styleMain.rowContentTitle}>
							Enterprise Cyber Defense Architecture (ECDA)
						</h2>
						<p className={styleMain.rowContentText}>
							Combinamos nossas Estratégias com suas Estratégias,
							combinamos nossas tecnologias, processos e pessoas,
							projetamos, arquitetamos e implementamos segurança
							de ponta para seu ambiente corporativo.
						</p>
					</div>
					<div className={styleMain.rowImage}>
						<Image src="/Icons/2.png" width="550" height="550" alt="" />
					</div>
				</div>
			</section>

			<div className={styleMain.containerOther}>
				<div className={styleMain.row}>
					<div className={styleMain.rowImage}>
						<Image src="/Icons/third-screen-image.png" width="500" height="500" alt="" />
					</div>
					<div className={styleMain.rowContent}>
						<h2 className={styleMain.rowContentTitle}>
							Construímos segurança do zero
						</h2>
						<p className={styleMain.rowContentText}>
							No ambiente de alta tecnologia de hoje, é vital entender e garantir que todas
							as suas garantias de segurança e tecnologias funcionem em harmonia para ajudar
							nas suas estratégias de tomada de decisão e garantir
							que você atenda aos seus objetivos de negócios e requisitos
							de segurança. Dependendo da complexidade de sua empresa hoje
							ou daquela que você planeja construir no futuro, você precisa
							manter um foco em tudo relacionado à tecnologia de segurança da informação.
						</p>

						<p className={styleMain.rowContentText}>
							O nosso objectivo é garantir que a resiliência de segurança e os
							controles do sistema estejam alinhados com os objetivos principais
							e o foco estratégico da sua empresa por meio de um processo arquitetônico
							alimentado por pessoas informadas, processos simplificados e tecnologia
							de ponta para minimizar riscos e reduzir custos.
						</p>
					</div>
				</div>

				<div className={styleMain.circleInfoContainer}>
					<div className="row p-5">
						<div className="col-md-4">
							<div className="row">
								<div className={`col-md-2 ${styleMain.circle}`}></div>
								<div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
									<h2>O que é Arquitetura e Design de segurança?</h2>
									<p>
										A arquitetura de segurança é o processo de estabelecer uma estrutura
										de segurança para seu ambiente de negócios para criar uma transformação de segurança duradoura.
									</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="row">
								<div className={`col-md-2 ${styleMain.circle}`}></div>
								<div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
									<h2>Como fazemos</h2>
									<p>
										Identificando suas necessidades específicas de segurança, conduzimos pesquisas,
										auditorias e avaliacoes exaustivas de Seguranca para identificar todos os riscos,
										vulnerabilidades e Falhas de Seguranca do seu ambiente corporativo.
									</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="row">
								<div className={`col-md-2 ${styleMain.circle}`}></div>
								<div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
									<h2>Revisamos sua Arquitetura de segurança actual</h2>
									<p>
										Realizamos uma avaliação aprofundada da sua infraestrutura de segurança existente,
										Analisamos dados extraídos de várias configurações, entrevistas com funcionários
										e quaisquer outros controles em seu ambiente operacional para determinar
										a condição atual ou a segurança de seu sistema de TI.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row p-5">
						<div className="col-md-4">
							<div className="row">
								<div className={`col-md-2 ${styleMain.circle}`}></div>
								<div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
									<h2>Reduzimos a probabilidade de violações de segurança</h2>
									<p>
										Ao fortalecer seus sistemas com uma estrutura de arquitetura de segurança,
										ajudamos você a encontrar e fechar os pontos fracos de sua organização,
										reduzindo a probabilidade de um invasor entrar. com uma compreensão
										mais profunda das interdependências em toda a sua empresa que dependem de práticas de segurança otimizadas.
									</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="row">
								<div className={`col-md-2 ${styleMain.circle}`}></div>
								<div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
									<h2>Implementamos tecnologias, políticas e processos de segurança</h2>
									<p>
										Implementamos a tecnologia de design de segurança selecionada e instalamos
										e configuramos de acordo com as políticas, sistemas, dados e outros recursos
										da sua organização, desenvolvemos uma abordagem de segurança padronizada em
										toda a sua organização para melhores interações e operações gerais.
									</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="row">
								<div className={`col-md-2 ${styleMain.circle}`}></div>
								<div className={`col-md-10 mt-4 ${styleMain.circleInfo}`}>
									<h2>Nós trabalhamos com você</h2>
									<p>
										Nossa equipe trabalha com você em todas as fases de desenvolvimento,
										design e implementação para entender seu cenário de segurança atual,
										devido à complexidade da arquitetura corporativa é essencial que você
										faça um balanço de tudo, desde a arquitetura de TI existente até a nuvem
										de serviços que você usa, trabalhamos com você para ajudá-lo a adaptar
										sua estratégia de segurança para reduzir o risco de segurança e melhorar as operações.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className={styleMain.plans}>
					<h3 className={styleMain.plansInfo}>
						Fale com um especialista em Segurança<br /> hoje mesmo!
					</h3>
					<p className={styleMain.secondInfo}>
						Você está pronto para melhorar sua arquitetura de segurança, proteger<br />
						seu sistema e aprimorar seus processos de negócios?
					</p>
					<Link href="" className={styleMain.button} passHref>
						<button className={styleMain.button}>Iniciar</button>
					</Link>
				</div>
			</div>

			<Footer />
		</main>
	);
}

export default Plans;
