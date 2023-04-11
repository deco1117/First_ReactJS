import FotoMe from "../../assets/images/fotoMe.png"
const SectionMe = () => {
    return (
        <>
            <div className="container sectionMe">
                <div className="sectionMe__wrapper">
                    <div className="sectionMe__wrapper--start">
                        <div className="sectonMe__title">
                        <h1 className="sectonMe__wrapper--start-title">
                            Hi, I am John,
                            Creative Technologist
                        </h1>
                        </div>
                        <p className="sectonMe__wrapper--start-text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <div className="sectonMe__wrapper--start-btn">
                            Download Resume
                        </div>
                    </div>
                    <div className="sectonMe__wrapper--end">
                        <img src={FotoMe} alt="Foto"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionMe