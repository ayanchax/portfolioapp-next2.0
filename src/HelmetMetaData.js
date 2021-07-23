import React from "react";
import { Helmet } from "react-helmet";
export default function HelmetMetaData(props) {
    let currentUrl =
        props.url !== undefined
            ? props.url
            : "https://swaroopchakraborty-9088c.netlify.app/";
    let quote = props.quote !== undefined ? props.quote : "";
    let title =
        props.title !== undefined
            ? props.title
            : "Swaroop Chakraborty(Ayan) | Portfolio";
    let image =
        props.image !== undefined
            ? props.image
            : "https://swaroopchakraborty-9088c.netlify.app/images/share-preview/preview.png";
    let description =
        props.description !== undefined
            ? props.description
            : "Hi there! I am Swaroop! You might also know me as Ayan Chax. I have been into freelancing consulting, coding and full stack development since more than 10 years now. I tend to build scalable mobile ready applications that are interesting for the world and which are essentially useful and helpful to a large section of the community";
    let hashtag = props.hashtag !== undefined ? props.hashtag : "#portfolio";
    return (
        <Helmet>
            <title>{title}</title>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="csrf_token" content="" />
            <meta property="type" content="website" />
            <meta property="url" content={currentUrl} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="_token" content="" />
            <meta name="robots" content="noodp" />
            <meta property="title" content={title} />
            <meta property="quote" content={quote} />
            <meta name="description" content={description} />
            <meta property="image" content={image} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:quote" content={quote} />
            <meta property="og:hashtag" content={hashtag} />
            <meta property="og:image" content={image} />
            <meta content="image/*" property="og:image:type" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content="Portfolio" />
            <meta property="og:description" content={description} />
        </Helmet>
    );
}
