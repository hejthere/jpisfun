import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
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
			redirection: "/vocabulary",
			imageSrc: disease,
			imageAlt: "disease",
			text: "Vocabulary",
		},
		{
			colCls: "menu-col px-3 bg-red",
			redirection: "/vocabulary/quotes",
			imageSrc: food,
			imageAlt: "food",
			text: "Quote of Today",
		},
	];

	const Banners = banners.map((banner, index) => (
		<Col className={banner.colCls} key={`banner-${index}`}>
			<Link className="picturelink" to={banner.redirection}>
				<div className="subpagelink-wrapper">
					<Image
						className="subpage-img"
						src={banner.imageSrc}
						alt={banner.imageAlt}
					/>
				</div>
				<h5 className="subpagelinkword mx-3">{banner.text}</h5>
			</Link>
		</Col>
	));

	// Sections
	const sections = [
		{
			wrapperCls: "homepage-section bg-yellow-100",
			title: "For Japanese Beginners",
			subtitle:
				"Try and challenge the Japanese Quiz !",
			imgSrc: fuji,
			imgAlt: "FujiMountain",

		},
		{
			wrapperCls: "homepage-section bg-blue-100 flex-row-reverse",
			title: "Japanese Vocabulary",
			subtitle: "Learn Basic Japanese words with Picture and Audio.",
			imgSrc: daruma,
			imgAlt: "Daruma",
		},
	];

	const Sections = sections.map((section, index) => (
		<div className={section.wrapperCls} key={`section-${index}`}>
			<Image
				className='mx-3'
				src={section.imgSrc}
				alt={section.imgAlt}
			/>
			<div>
				<h2> {section.title} </h2>
				<p> {section.subtitle} </p>
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
