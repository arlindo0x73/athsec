import { MdBrandingWatermark } from "react-icons/md"
import Header from "../../components/Header"
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import style from './cdcr.module.css'
import styleMain from './../static/css/services.module.css'
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const Plans = () => {
	return (
		<main className={styleMain.container}>
			<Header title="Cyber defense compliance and risk" />
			<Menu />
			<section className={styleMain.containerOther}>
				<div className={styleMain.row}>
					<div className={styleMain.rowContent}>
						<h2 className={styleMain.rowContentTitle}>
							Soluções de Gerenciamento<br />
							de Risco e Conformidade de<br />
							Segurança da Informação
						</h2>
						<p className={styleMain.textWhite}>
							Nosso objetivo é manter nossos clientes seguros em<br />
							conformidade e continuidade dos negocios para<br />
							evitar ataques cibernéticos.
						</p>
					</div>
					<div className={styleMain.rowImage}>
						<img src="/Icons/third-screen-image.png" className="" alt="" />
					</div>
				</div>
			</section>

			<div className={styleMain.containerOther} style={{ background: "#FF2E47" }} >
				<div className={styleMain.row} >
					<div className={styleMain.rowImage}>
						<img src="/Icons/left-compliance.png" className="" alt="" />
					</div>
					<div className={styleMain.rowContent}>
						<h2 className={styleMain.rowContentTitle} style={{ color: "#141E2E" }}>
							Compliance and Risk Management
						</h2>
						<p className={styleMain.textWhite} style={{ color: "#141E2E" }}>
							A Cyber Defense - Compliance and Risk <br />
							Managemant ajuda as organizações a melhorar <br />
							sua postura geral de segurança, reduzindo a <br />
							exposição ao risco, garantindo a conformidade <br />
							com os regulamentos do setor e alinhando-se <br />
							aos padrões e práticas recomendadas de <br />
							segurança da informação,
						</p>
					</div>
				</div>

				<div className="row p-5">
					<div className="col-md-4">
						<div className="row">
							<div className="col-md-2" style={{ background: '#141E2E', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
							<div className="col-md-10 mt-4">
								<h5 className="fw-bold">Regulamento Geral de Proteção de Dados (GDPR)</h5>
								<p>
									O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
									armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="row">
							<div className="col-md-2" style={{ background: '#141E2E', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
							<div className="col-md-10 mt-4">
								<h5 className="fw-bold">Regulamento Geral de Proteção de Dados (GDPR)</h5>
								<p>
									O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
									armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="row">
							<div className="col-md-2" style={{ background: '#141E2E', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
							<div className="col-md-10 mt-4">
								<h5 className="fw-bold">Regulamento Geral de Proteção de Dados (GDPR)</h5>
								<p>
									O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
									armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row p-5">
					<div className="col-md-4">
						<div className="row">
							<div className="col-md-2" style={{ background: '#141E2E', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
							<div className="col-md-10 mt-4">
								<h5 className="fw-bold">Avaliação de risco de segurançada informação</h5>
								<p>
									O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
									armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="row">
							<div className="col-md-2" style={{ background: '#141E2E', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
							<div className="col-md-10 mt-4">
								<h5 className="fw-bold">Conformidade regualatória</h5>
								<p>
									O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
									armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="row">
							<div className="col-md-2" style={{ background: '#141E2E', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
							<div className="col-md-10 mt-4">
								<h5 className="fw-bold">Resposta a incidentes</h5>
								<p>
									O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
									armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styleMain.containerOther} style={{ background: "#141E2E" }} >
				<div className={styleMain.row} >
					<div className={styleMain.rowImage}>
						<img src="/Icons/consulting-security.png" className="" alt="" />
					</div>
					<div className={styleMain.rowContent}>
						<h2 className={styleMain.rowContentTitle} style={{ color: "#FF2E47" }}>
							Consultoria em segurança da<br /> informação cibernética
						</h2>
						<p className={styleMain.textWhite}>
							A segurança cibernética está se tornando um domínio vasto e <br />
							diversificado, e nenhuma organização <br />
							pode reivindicar experiência em todo o cenário cibernético. <br />
							Saiba mais como podemos cobrir suas necessidades específicas de negócios. <br />
							Saiba como a Segurança da Informação e cibersegurança <br />
							pode ajudar sua empresa a adotar mudanças e criar valor<br />
						</p>
					</div>
				</div>

				<div className="row p-5">
					<div className="col-md-4">
						<div className="row">
							<div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
							<div className="col-md-10 mt-4">
								<h5 className={styleMain.titleRed}>Regulamento Geral de Proteção de Dados (GDPR)</h5>
								<p className="text-white">
									O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
									armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="row">
							<div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
							<div className="col-md-10 mt-4">
								<h5 className={styleMain.titleRed}>Regulamento Geral de Proteção de Dados (GDPR)</h5>
								<p className="text-white">
									O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
									armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="row">
							<div className="col-md-2" style={{ background: '#FF2E47', width: '4rem', height: '4rem', borderRadius: '100%' }}></div>
							<div className="col-md-10 mt-4">
								<h5 className={styleMain.titleRed}>Regulamento Geral de Proteção de Dados (GDPR)</h5>
								<p className="text-white">
									O regulamento GDPR é complexo e tem um impacto significativo na maneira como você coleta, processa,
									armazena e dá acesso aos dados que possui. Confie em nos para aumentar seu nível de conformidade de privacidade!
								</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className={styleMain.fourthCardsContainer}>
						<div className={styleMain.cardService}>
							<div className={styleMain.cardServiceImage}>
								<img src="/Icons/gdpr.png" alt="Management Security" className={styleMain.image} />
							</div>
							<div className={styleMain.cardServiceTexts}>
								<h2>Regulamento Geral de proteção de dados</h2>
								<p>
									Deixe nos transformar seus sistemas para minimizar o risco e
									torná-los compatível rapidamente.
								</p>
								<Link href="">
									<button>Iniciar</button>
								</Link>
							</div>
						</div>

						<div className={styleMain.cardService}>
							<div className={styleMain.cardServiceImage}>
								<img src="/Icons/information-consulting.png" alt="Management Security" className={styleMain.image} />
							</div>
							<div className={styleMain.cardServiceTexts}>
								<h2>Information security consulting</h2>
								<p>
									Deixe nos transformar seus sistemas para minimizar o risco e
									torná-los compatível rapidamente.
								</p>
								<Link href="">
									<button>Iniciar</button>
								</Link>
							</div>
						</div>

						<div className={styleMain.cardService}>
							<div className={styleMain.cardServiceImage}>
								<img src="/Icons/policy-security.png" alt="Management Security" className={styleMain.image} />
							</div>
							<div className={styleMain.cardServiceTexts}>
								<h2>Política de segurança cibernética</h2>
								<p>
									Deixe nos transformar seus sistemas para minimizar o risco e
									torná-los compatível rapidamente.
								</p>
								<Link href="">
									<button>Iniciar</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className={styleMain.plans}>
					<p className={styleMain.secondHomeinfo}>
						Soluções de segurança customizadas ao seu negócio
					</p>
					<p className={styleMain.secondInfo}>
						Lorem ipsum dolor sit amet sed, consectetur adipiscing elit Lorem
						ipsum dolor sit
						<br /> amet sed, consectetur adipiscing elit Lorem ipsum dolor sit
						amet sed
						<br /> consectetur adipiscing elit Lorem ipsum dolor sit amet sed,
						<br /> consectetur adipiscing elit
					</p>
					<Link href="">
						<button>Planos</button>
					</Link>
				</div>
			</div>

			<Footer />
		</main>
	);
}

export default Plans;