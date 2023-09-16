import chessbot from '../images/chessbot.jpg'
import verbatims from '../images/verbatims.png'
import raft from '../images/raft.jpeg'
import neuralnet from '../images/neuralnet.jpeg'
import scorpio from '../images/scorpio.png'
import webserver from '../images/webserver.jpeg'
import selfie from '../images/selfie.jpg'

/*
pick 4x3 images
*/
export const projects = [
    {
        title: "Selfie Timelapse",
        description:
            "Align faces w/ ML for smooth timelapse",
        image: selfie,
        link: "https://github.com/josephxu1234/Selfie-Timelapse",
    },
    {
        title: "Stockwish",
        description:
            "An XGBoost chess bot",
        image: chessbot,
        link: "https://github.com/josephxu1234/stockwish",
    },
    {
        title: "Verbatims (Private Repo)",
        description:
            "A fun quote-tracking app",
        image: verbatims,
        link: "",
    },
    {
        title: "RAFT (Private Repo)",
        description:
            "Distributed consensus protocol",
        image: raft,
        link: ""
    },
    {
        title: "RNN Sentiment Classifier",
        description:
            "Marks happy/sad sentences",
        image: neuralnet,
        link: "https://github.com/josephxu1234/rnn"
    },
    {
        title: "Cybersecurity Training Engine",
        description:
            "Scoring for cybersecurity exercises",
        image: scorpio,
        link: "https://github.com/josephxu1234/scorpio"
    }
];