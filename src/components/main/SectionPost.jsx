const SectionPost = () => {
    return (
        <>
            <div className="sectionPost">
                <div className="container">
                    <div className="sectionPost__top">
                        <h2 className="section__top--title">
                            Recent posts
                        </h2>
                        <a href="#" className="sectionPost__top--link">View all</a>
                    </div>
                    <div className="sectionPost__wrapper">
                        <div className="sectionPost__wrapper--card">
                            <h4 className="sectionPost__wrapper--card-title">
                                Making a design system from scratch
                            </h4>
                            <div className="sectionPost__wrapper--card-span">
                                12 Feb 2020 | Design, Pattern
                            </div>
                            <p className="sectionPost__wrapper--card-text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className="sectionPost__wrapper--card">
                            <h4 className="sectionPost__wrapper--card-title">
                                Creating pixel perfect icons in Figma
                            </h4>
                            <div className="sectionPost__wrapper--card-span">
                                12 Feb 2020 | Figma, Icon Design
                            </div>
                            <p className="sectionPost__wrapper--card-text">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SectionPost;