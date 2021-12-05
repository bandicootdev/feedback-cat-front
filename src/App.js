import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {Roadmap} from "./pages/roadmap/roadmap";
import {NotFound} from "./pages/notFount/notFound";
import {CreateFeedback} from "./pages/createFeedback/createFeedback";
import {useState} from "react";
import {CategoriesContext} from "./contexts/categories";
import {FeedbackContext} from "./contexts/feedback";

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Home} from "./pages/Home";
import {ViewFeedback} from "./pages/viewFeedback/viewFeedback";
import {UpdateFeedback} from "./pages/updateFeedback/updateFeedback";

function App() {
    const [feedbacksStatus, setFeedbackStatus] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [categories, setCategories] = useState([]);
    return (
        <CategoriesContext.Provider value={{
            categories,
            setCategories
        }}>
            <FeedbackContext.Provider value={{
                feedbacks,
                setFeedbacks,
                feedbacksStatus,
                setFeedbackStatus
            }}>
                <Router>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={`/feedback/:id`} element={<ViewFeedback/>}/>
                        <Route path={'/create-feedback/'} element={<CreateFeedback/>}/>
                        <Route path={'/update-feedback/:id'} element={<UpdateFeedback/>}/>
                        <Route path={'roadmap'} element={<Roadmap/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </Router>
            </FeedbackContext.Provider>
        </CategoriesContext.Provider>
    );
}

export default App;
