import {useContext, useEffect, useState} from "react";
import './App.css'
import {Header} from "./new-components/Header/Header";
import {SearchBar} from "./new-components/searchbar/SearchBar";
import {RoadmapStatus} from "./new-components/roadmap-status/roadmapStatus";
import {CategoryCard} from "./new-components/categoryCard/CategoryCard";
import {useWindowSize} from "./hooks/useWindowSize";
import {FeedbackContext} from "./contexts/feedback";

export const LayoutSidebar = ({categories, status, children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const {feedbacksStatus} = useContext(FeedbackContext);
    const countSuggestions = feedbacksStatus.find((f) => f.name === 'SUGGESTION')
    const size = useWindowSize();
    useEffect(() => {
        if (size.width >= 768) {
            setIsSideBarOpen(false)
        }
    }, [size])
    return (
        <div className={'bg-color-layout'}>
            <div className={'d-block d-md-none'}>
                <Header isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}/>
                <SearchBar/>
            </div>
            <div
                className={`sidebar${isSideBarOpen ? ' open' : ''} d-flex flex-column align-self-end p-4 bg-color-layout`}>
                <CategoryCard categories={categories}/>
                <div className={'mt-4'}>
                    <RoadmapStatus status={status}/>
                </div>
            </div>

            {/*<div className={'container p-lg-5 d-none d-md-block flex-md-row d-lg-flex flex-lg-row'}>*/}
            {/*    /!*<div className={''}>*!/*/}
            {/*        <div className={'d-flex justify-content-md-between flex-lg-column'}>*/}
            {/*            <Header className={'card-etc'} isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}/>*/}
            {/*            <CategoryCard className={'card-etc'} categories={categories}/>*/}
            {/*            <RoadmapStatus className={'card-etc'} status={status}/>*/}
            {/*        </div>*/}
            {/*        <SearchBar/>*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}


            <main className={'d-none d-md-none d-lg-block container d-lg-flex flex-lg-row mt-lg-5'}>
                <div className={'d-flex flex-lg-column align-items-center'}>
                    <Header className={'card-etc'} isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}/>
                    <CategoryCard className={'card-etc category-card mt-lg-4'} categories={categories}/>
                    <RoadmapStatus className={'card-etc roadmap-card  mt-lg-4'} status={status}/>
                </div>
                <div className={'container d-lg-flex flex-lg-column justify-content-lg-center'}>
                    <div className={'d-none d-lg-block'}>
                        <SearchBar suggestions={countSuggestions?.count || 0}/>
                    </div>
                    <div className={'App bg-color-layout'}>
                        {isSideBarOpen && <div className={'sidebar-overlay'}></div>}
                        <div className={'mt-4'}>
                            {children}
                        </div>
                    </div>
                </div>
            </main>


            <main className={'container d-none d-md-block d-lg-none d-md-block'}>
                <div className={'d-flex flex-md-row justify-content-md-between mt-2'}>
                    <Header className={'card-etc'} isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}/>
                    <CategoryCard className={'category-card'} categories={categories}/>
                    <RoadmapStatus className={'card-etc roadmap-card'} status={status}/>
                </div>
                <div className={'d-md-flex flex-md-column justify-content-md-center mt-2'}>
                    <div className={'d-none d-md-block border-md-3'}>
                        <SearchBar/>
                    </div>
                    <main className={'App bg-color-layout mt-4'}>
                        {isSideBarOpen && <div className={'sidebar-overlay'}></div>}
                        <div className={'mt-4'}>
                            {children}
                        </div>
                    </main>
                </div>
            </main>


            <main className={'d-md-none d-lg-none d-md-none'}>
                <div className={'d-md-flex flex-md-column justify-content-md-center mt-2'}>
                    <div className={'d-none d-md-block border-md-3'}>
                        <SearchBar/>
                    </div>
                    <main className={'App bg-color-layout mt-4'}>
                        {isSideBarOpen && <div className={'sidebar-overlay'}></div>}
                        <div className={'mt-4'}>
                            {children}
                        </div>
                    </main>
                </div>
            </main>

        </div>
    )
}