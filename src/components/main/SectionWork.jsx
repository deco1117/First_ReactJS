import dashboard from "../../assets/images/dashboards.png"

const SectionWork = () => {
    return (
        <>
            <div className="container sectionWork">
                <div className="sectionWork__title">
                    Featured works
                </div>
                <div className="sectionWork__wrapper">
                    <div className="sectionWork__wrapper--card">
                        <div className="card__start">
                            <img src={dashboard} alt="photo" width={246} height={180} />
                        </div>
                        <div className="section__end">
                            <h4 className="sectionWork__title">
                                Designing Dashboards
                            </h4>
                            <div className="card__year">
                                <span className="year">
                                    2020
                                </span>
                                <span className="name">
                                    Dashboard
                                </span>
                            </div>
                            <p className="card__text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionWork;
