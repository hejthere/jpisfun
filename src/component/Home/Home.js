import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import Greeting from "../../Picture/greeting.png";
import food from "../../Picture/food.png";
import disease from "../../Picture/disease.png";
import fuji from "../../Picture/fuji.png";
import daruma from "../../Picture/daruma.png";

const home = (props) => {
	// Banners
	const banners = [
		{
			colCls: "menu-col px-3 bg-blue",
			redirection: "/quiz",
			imageSrc: Greeting,
			imageAlt: "greeting",
			text: "Quiz",
		},
		{
			colCls: "menu-col px-3 bg-yellow-500",
			redirection: "/disease",
			imageSrc: disease,
			imageAlt: "disease",
			text: "Vocabulary",
		},
		{
			colCls: "menu-col px-3 bg-red",
			redirection: "/resources",
			imageSrc: food,
			imageAlt: "food",
			text: "Resources",
		},
	];

	const Banners = banners.map((banner, index) => (
		<Col className={banner.colCls} key={`banner-${index}`}>
			<Link className="picturelink" to={banner.redirection}>
				<div className="subpagelink-wrapper">
					<Image
						className="subpagelink"
						src={banner.imageSrc}
						alt={banner.imageAlt}
					/>
				</div>
				<h5 className="subpagelinkword">{banner.text}</h5>
			</Link>
		</Col>
	));

	// Sections
	const sections = [
		{
			wrapperCls: "homepage-section bg-yellow-100",
			title: "For Japanese Beginners",
			subtitle:
				"You could learn some basic Japanese Vocabulary and Grammar Practice in this website.",
			imgSrc: fuji,
			imgAlt: "FujiMountain",
			imgAttrs: {
				aos: "fade-in",
				aosDelay: "300",
			},
			button: "MORE",
			redirection: "/katakana",
			isDisabled: true,
		},
		{
			wrapperCls: "homepage-section bg-blue-100 flex-row-reverse",
			title: "Japanese Vocabulary",
			subtitle: "Learn Daily Japanese Vocabulary with Exercise and Audio.",
			imgSrc: daruma,
			imgAlt: "Daruma",
			imgAttrs: {
				aos: "zoom-in",
				aosDelay: "500",
				duration: "1000",
			},
			button: "MORE",
			redirection: "/katakana",
			isDisabled: true,
		},
	];

	const Sections = sections.map((section, index) => (
		<div className={section.wrapperCls} key={`section-${index}`}>
			<Image
				src={section.imgSrc}
				alt={section.imgAlt}
				data-aos={section.imgAttrs?.aos}
				data-aos-delay={section.imgAttrs?.delay}
				data-aos-duration={section.imgAttrs?.duration}
			/>
			<div>
				<h2> {section.title} </h2>
				<p> {section.subtitle} </p>
				<Link to={section.redirection}>
					<Button disabled={section.redirection}> {section.button} </Button>
				</Link>
			</div>
		</div>
	));

	return (
		<div>
			<Row
				xs={1}
				sm={1}
				md={3}
				lg={3}
				fluid="true"
				className="menu"
				children={Banners}
			/>
			{Sections.map((Section) => (
				<Container fluid="true" children={Section} />
			))}
		</div>
	);
};

export default home;
