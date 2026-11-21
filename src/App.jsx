import { useState } from 'react';

const skills = [
  { name: 'HTML', level: '90%', icon: '</>' },
  { name: 'CSS', level: '88%', icon: '✦' },
  { name: 'JavaScript', level: '82%', icon: 'JS' },
  { name: 'React.js', level: '80%', icon: '⚛' },
  { name: 'Tailwind CSS', level: '86%', icon: '≈' },
  { name: 'GitHub', level: '78%', icon: '◉' },
];

const services = [
  { number: '01', title: 'Website Development', text: 'Fast, responsive websites with thoughtful structure, clean code, and a memorable visual identity.', icon: '↗' },
  { number: '02', title: 'React Frontend Development', text: 'Interactive interfaces built with reusable components and a smooth, intuitive user experience.', icon: '◌' },
  { number: '03', title: 'Landing Pages', text: 'Focused, conversion-ready landing pages that turn a first impression into meaningful action.', icon: '▱' },
  { number: '04', title: 'Website Redesign', text: 'Fresh visual direction and modern usability for websites ready for their next chapter.', icon: '⌁' },
];

const projects = [
  { category: 'Web Design', title: 'Nova Finance', description: 'A clean dashboard experience for a next-generation fintech product.', theme: 'project-blue', tags: ['React', 'CSS'] },
  { category: 'Landing Page', title: 'Orbit Studio', description: 'A bold, editorial landing page for a creative digital studio.', theme: 'project-purple', tags: ['HTML', 'JavaScript'] },
  { category: 'UI Concept', title: 'Nexa Workspace', description: 'A focused productivity interface designed around clarity and flow.', theme: 'project-teal', tags: ['React', 'Tailwind'] },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
	<div className="section-heading">
	  <p className="eyebrow">{eyebrow}</p>
	  <h2>{title}</h2>
	  {copy && <p className="section-copy">{copy}</p>}
	</div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
	<div className="site-shell">
	  <header className="site-header">
		<a className="brand" href="#home" onClick={closeMenu} aria-label="ZERONICX home">
		  <span className="brand-mark">Z<span>×</span></span>
		  <span>ZERONICX</span>
		</a>
		<button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
		  <span /><span /><span />
		</button>
		<nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
		  {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
			<a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
		  ))}
		  <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowIcon /></a>
		</nav>
	  </header>

	  <main>
		<section className="hero section-wrap" id="home">
		  <div className="hero-copy">
			<p className="eyebrow"><span className="status-dot" /> Available for new projects</p>
			<h1>Building <span>Modern</span><br />Digital Experiences.</h1>
			<p className="hero-text">I’m a frontend developer who turns ideas into fast, purposeful, and visually striking digital experiences.</p>
			<div className="hero-actions">
			  <a className="button button-primary" href="#projects">Explore my work <ArrowIcon /></a>
			  <a className="text-link" href="#about">More about me <ArrowIcon /></a>
			</div>
		  </div>
		  <div className="hero-visual" aria-label="Abstract blue and cyan digital artwork">
			<div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
			<div className="visual-core"><span>Z</span><small>CREATIVE<br />DEVELOPER</small></div>
			<div className="visual-label label-top">DIGITAL / 01</div><div className="visual-label label-bottom">EST. 2024</div>
		  </div>
		  <div className="scroll-hint"><span /> Scroll to explore</div>
		</section>

		<section className="about section-wrap section-grid" id="about">
		  <SectionHeading eyebrow="01 / About me" title={<>A thoughtful approach to<br /><span>digital craft.</span></>} />
		  <div className="about-content">
			<p className="lead">I’m a Computer Science student and Frontend Web Developer passionate about bringing clean design and smart technology together.</p>
			<p>I believe the best websites live where visual clarity meets purposeful interaction. From the first wireframe to the final line of code, I care about building digital spaces that feel as good as they work.</p>
			<a className="text-link" href="#contact">Let’s create something <ArrowIcon /></a>
		  </div>
		</section>

		<section className="skills section-wrap" id="skills">
		  <SectionHeading eyebrow="02 / My toolkit" title={<>Tools I use to turn<br /><span>ideas into reality.</span></>} />
		  <div className="skill-grid">
			{skills.map((skill) => <div className="skill-card" key={skill.name}><div className="skill-icon">{skill.icon}</div><div className="skill-info"><div className="skill-title"><strong>{skill.name}</strong><span>{skill.level}</span></div><div className="skill-bar"><span style={{ width: skill.level }} /></div></div></div>)}
		  </div>
		</section>

		<section className="services section-wrap" id="services">
		  <SectionHeading eyebrow="03 / What I do" title={<>Small details.<br /><span>Big impact.</span></>} />
		  <div className="service-list">
			{services.map((service) => <article className="service-item" key={service.number}><span className="service-number">{service.number}</span><div className="service-icon">{service.icon}</div><div className="service-text"><h3>{service.title}</h3><p>{service.text}</p></div><ArrowIcon /></article>)}
		  </div>
		</section>

		<section className="projects section-wrap" id="projects">
		  <div className="projects-heading"><SectionHeading eyebrow="04 / Selected work" title={<>A few things I’ve<br /><span>built with purpose.</span></>} /><a className="text-link desktop-link" href="#contact">Have a project in mind? <ArrowIcon /></a></div>
		  <div className="project-grid">
			{projects.map((project, index) => <article className="project-card" key={project.title}><div className={`project-image ${project.theme}`}><span className="project-index">0{index + 1}</span><div className="project-shape" /><span className="project-arrow"><ArrowIcon /></span></div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
		  </div>
		</section>

		<section className="contact section-wrap" id="contact">
		  <div className="contact-panel"><p className="eyebrow">05 / Start a conversation</p><h2>Have an idea?<br /><span>Let’s make it real.</span></h2><p>Whether you have a clear brief or just a spark of an idea, I’d love to hear what you’re working on.</p><a className="button button-primary" href="mailto:mh6487385@gmail.com">Send me a message <ArrowIcon /></a></div>
		  <div className="contact-links"><p>Find me online</p><a href="https://www.fiverr.com/" target="_blank" rel="noreferrer">Fiverr <ArrowIcon /></a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a><a href="tel:+923175635619">☎ +92 317 5635619 <ArrowIcon /></a><a href="mailto:mh6487385@gmail.com">✉ mh6487385@gmail.com <ArrowIcon /></a></div>
		</section>
	  </main>

	  <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">Z<span>×</span></span><span>ZERONICX</span></a><p>© 2024 ZERONICX. Crafted with intention.</p><a className="back-top" href="#home">Back to top ↑</a></footer>
	</div>
  );
}

export default App;
