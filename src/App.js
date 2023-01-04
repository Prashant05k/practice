import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import FunctionalComponent from "./TechnicalSuneja/FunctionalComponent";
import ClassComponent from "./TechnicalSuneja/ClassComponent";
import State from "./TechnicalSuneja/State";
import FeventHandling from "./TechnicalSuneja/FeventHandling";
import CeventHandling from "./TechnicalSuneja/CeventHandling";
import StyleSheet from "./TechnicalSuneja/StyleSheet";
import "./TechnicalSuneja/Style.css";
import StylesCss from "./TechnicalSuneja/ExternalStyles.module.css";
import TopicsDone from "./TechnicalSuneja/TopicsDone";
import FormC from "./TechnicalSuneja/FormC";
import FormF from "./TechnicalSuneja/FormF";
import LifeCycleA from "./LifeCycleC/LifeCycleA";
import LifeCycleAF from "./LifeCycleF/LifeCycleAF";
import LifeCycleD from "./LifeCycleC/LifeCycleD";
import ApiCallC from "./APICallls/ApiCallC";
import ApiCallF from "./APICallls/ApiCallF";
import ApiPostC from "./APICallls/ApiPostC";
import ApiPostF from "./APICallls/ApiPostF";
import CounterC from "./TechnicalSuneja/CounterC";
import CounterF from "./TechnicalSuneja/CounterF";
import UseStateHookWithObject from "./TechnicalSuneja/UseStateHookWithObject";
import UseStateWithArray from "./TechnicalSuneja/UseStateWithArray";
import ComponentDidUpdate from "./TechnicalSuneja/ComponentDidUpdate";
import XYClass from "./TechnicalSuneja/XYClass";
import XYfun from "./TechnicalSuneja/XYfun";
import ContextAPIA from "./ContextAPI/ContextAPIA.js";
import AjayC from "./HOC/AjayC";
import SushantC from "./HOC/SushantC";
import VikasC from "./HOC/VikasC";
import UseMemo from "./TechnicalSuneja/UseMemo";
import FA from "./ContextAPI/FA";
import AjayF from "./HOC/AjayF";
import SushantF from "./HOC/SushantF";
import VikasF from "./HOC/VikasF";
import HideAndShow from "./CodeStepByStep/HideAndShow";
import HideAndShowC from "./CodeStepByStep/HideAndShowC";
import LIfeCycle from "./CodeStepByStep/LIfeCycle";
import ComponentWillUnmount from "./CodeStepByStep/ComponentWillUnmount";
import UseEffect from "./CodeStepByStep/UseEffect";
import Form from "./CodeStepByStep/Form";
import Portal from "./CodeStepByStep/Portal";
import CreateRef from "./CodeStepByStep/CreateRef";
import ErrorBoundary from "./CodeStepByStep/ErrorBoundary";
import ErrorBoundaryUser from "./CodeStepByStep/ErrorBoundaryUser";
import PureComponentC from "./CodeStepByStep/PureComponentC";
import MemoF1 from "./CodeStepByStep/MemoF1";
import UncontrolledComponentC from "./CodeStepByStep/UncontrolledComponentC";
import ControlledC from "./CodeStepByStep/ControlledC";
import LazyLoadingC from "./CodeStepByStep/LazyLoadingC";
import UploadFileC from "./CodeStepByStep/UploadFileC";
import UseRef from "./CodeStepByStep/UseRef";
import UseContext from "./CodeStepByStep/UseContext";
import Example from "./Example";
import Debounce from "./TechnicalSuneja/Debounce";
import EventBubbling from "./TechnicalSuneja/EventBubbling";
import ProptypesF from "./CodeWithHarry/ProptypesF";
import ParentF from "./CodeWithHarry/ParentF";
import Product from "./LifeCycleC/Product";
import Product1 from "./TechnicalSuneja/Product1";
import UseCallbackF from "./TechnicalSuneja/UseCallbackF";
import NavBar from "./Redux/Components/NavBar";
import Home from "./Redux/Components/Home";
import PropsDrilling from "./CodeWithHarry/PropsDrilling";
import ComponentComposition from "./CodeWithHarry/ComponentComposition";
import FetchGetC from "./APICallls/FetchGetC";
import FetchPostC from "./APICallls/FetchPostC";
import FetchGetF from "./APICallls/FetchGetF";
import FetchPostF from "./APICallls/FetchPostF";
import EventDelegation from "./GeeksForGeeks/EventDelegation";
import CustomHookCounter from "./GeeksForGeeks/CustomHookCounter";
import ShouldComponentUpdate from "./GeeksForGeeks/ShouldComponentUpdate";
import UseReducer from "./GeeksForGeeks/UseReducer";
import Throttle from "./TechnicalSuneja/Throttle";
import Flex from "./CSS/Flex";
import { useState } from "react";
import ReactBootstrap from "./reactBootstrap/ReactBootstrap";
import MultipleAPIAxios from "./APICallls/MultipleAPIAxios";
import MultipleAPIFetch from "./APICallls/MultipleAPIFetch";
import Cleanup from "./Thapa/Cleanup";
import ShortCircutEvaluation from "./Thapa/ShortCircutEvaluation";
import FormValidation from "./Project/FormValidatationAndFetchData/FormValidation";
import UpdateStateInRenderFun from "./UpdateStateInRender/UpdateStateInRenderFun";
import UpdateStateInRenderClass from "./UpdateStateInRender/UpdateStateInRenderClass";
import PassingMultiplePropsFun from "./TechnicalSuneja/PassingMultiplePropsFun";
import PassingMultiplePropsClass from "./TechnicalSuneja/PassingMultiplePropsClass";
import ForceUpdateFun from "./extraConcepts/ForceUpdateFun";
import ForceUpdateClass from "./extraConcepts/ForceUpdateClass";

function App() {
  const address = {
    street: "sm road",
    city: "Mumbai",
    pincode: 400001,
  };

  const arr = [6, 7, 8, 9, 0];

  // console.log(ProptypesF)
  const [theme, setTheme] = useState({
    backgroundColor: "#282c34",
  });
  const [btn, setBtn] = useState("light");

  function handleClick() {
    if (theme) {
      setTheme(null);
      setBtn("dark");
    } else {
      setTheme({
        backgroundColor: "#282c34",
      });
      setBtn("light");
    }
  }

  return (
    <>
      {/* <ReactBootstrap /> */}
      <Example />
      <div className="App">
        {/* CSS */}
        {/* <Flex/> */}

        {/* Redux */}
        {/* <NavBar/>
        <Home/> */}

        {/* <TopicsDone/> */}
        <button
          className={`btn btn-outline-dark mx2`}
          onClick={handleClick}
          style={{ textAlign: "left" }}
        >
          {btn}
        </button>
        <Link to="/bank/deposit">Deposit</Link>
        <span> </span>
        <Link to="/bank/withdraw">Withdraw</Link>
        <span> </span>
        <Link to="/NotesApp">NotesApp</Link>

        <header className="App-header" style={theme}>
          <img src={logo} className="App-logo" alt="logo" />

          {/*%%%%%%%%%%%%%% Technical Suneja %%%%%%%%%%%%%%%%%%%%%%%%%%*/}

          {/* <PassingMultiplePropsFun/> */}
          {/* <PassingMultiplePropsClass/> */}

          {/* <FunctionalComponent name='Prashant' age={24} address={address}/> */}

          {/* <ClassComponent name='Prashant' age={24} address={address}/> */}

          {/* <State/> */}

          {/* <FeventHandling/> */}
          {/* <CeventHandling age={24} array={arr}/> */}

          {/* <StyleSheet isValue={true}/>
          <h5 className={StylesCss.success}>Success: module file is imported successfully</h5> */}

          {/* <FormC/> */}
          {/* <FormF/> */}

          {/*
          <LifeCycleA/>
          <LifeCycleD/>  */}

          {/* LifeCycleA: constructor
          bundle.js:218 LifeCycleA: getDerivedStateFromProps
          bundle.js:227 LifeCycleA: render
          bundle.js:302 LifeCycleB: Constructor
          bundle.js:306 LifeCycleB: getDerivedStateFromProps
          bundle.js:315 LifeCycleB: render
          bundle.js:384 LifeCycleD: Constructor
          bundle.js:388 LifeCycleD: getDerivedStateFromProps
          bundle.js:397 LifeCycleD: render
          bundle.js:311 LifeCycleB: componentDidMount
          bundle.js:223 LifeCycleA: componentDidMount
          bundle.js:393 LifeCycleD: componentDidMount */}

          {/* </Product> */}
          {/* <Product1/> */}

          {/* <LifeCycleAF/> */}

          {/* <ApiCallC/> */}
          {/* <ApiCallF/> */}

          {/* <ApiPostC/> */}
          {/* <ApiPostF/> */}

          {/* <FetchGetC /> */}
          {/* <FetchPostC/> */}

          {/* <FetchGetF/> */}
          {/* <FetchPostF/> */}

          {/* <MultipleAPIAxios/> */}
          {/* <MultipleAPIFetch/> */}

          {/* <CounterC /> */}
          {/*<CounterF /> */}

          {/* <UseStateHookWithObject/> */}
          {/* <UseStateWithArray/> */}

          {/* <ComponentDidUpdate/> */}
          {/*
          <XYClass/>
          <XYfun/> */}

          {/* <ContextAPIA/> */}
          {/* <FA/> */}

          {/* <UseContext/> */}

          {/* <AjayC /> */}
          {/* <SushantC />
          <VikasC /> */}

          {/* <AjayF/>
          <SushantF/>
          <VikasF/> */}

          {/* <UseMemo/> */}

          {/* <UseCallbackF/> */}

          {/* <Debounce/> */}
          {/* <Throttle/> */}

          {/* <EventBubbling/> */}
          {/* EventBubbling, ,Event Capturing, Stop Propogatio, Immediate Propogation */}

          {/*%%%%%%%%%%%%%% CodeWithHarry %%%%%%%%%%%%%%%%%%%%%%%%%%*/}

          {/* <ProptypesF title='TextUtils' home='TextUtils'/> */}
          {/* <ParentF/> */}

          {/*%%%%%%%%%%%%%% CodeStepByStep %%%%%%%%%%%%%%%%%%%%%%%%%%*/}

          {/* <HideAndShow/> */}
          {/* <HideAndShowC/> */}

          {/* for both class and fn components */}
          {/* <ComponentWillUnmount/>  */}

          {/* <UseEffect/> */}

          {/* <Form/> */}

          {/* <Portal/> */}

          {/* <CreateRef/> */}
          {/* <UseRef/> */}

          {/* <ErrorBoundary> 
          <ErrorBoundaryUser />
          </ErrorBoundary>  */}

          {/* <PureComponentC/> */}

          {/* <MemoF1/> */}

          {/* <UncontrolledComponentC/> */}

          {/* <ControlledC/> */}

          {/* <LazyLoadingC/> */}

          {/* <UploadFileC/> */}

          {/* <PropsDrilling/> */}

          {/* <ComponentComposition /> */}

          {/*%%%%%%%%%%%%%% GeeksForGeeks %%%%%%%%%%%%%%%%%%%%%%%%%%*/}
          {/* <EventDelegation/> */}

          {/* <CustomHookCounter/> */}

          {/* <ShouldComponentUpdate/> */}

          {/* <UseReducer/> */}

          {/*%%%%%%%%%%%%%% Technical Thapa %%%%%%%%%%%%%%%%%%%%%%%%%%*/}
          {/* <Cleanup/> */}
          {/* <ShortCircutEvaluation/> */}

          {/*%%%%%%%%%%%%%% Interview Assignment %%%%%%%%%%%%%%%%%%%%%%%%%%*/}
          {/* <FormValidation/> */}

          {/*%%%%%%%%%%%%%% EXtra concepts %%%%%%%%%%%%%%%%%%%%%%%%%%*/}
          {/* <UpdateStateInRenderFun/> */}
          {/* <UpdateStateInRenderClass/> */}

          {/* <ForceUpdateFun /> */}
          {/* <ForceUpdateClass /> */}
        </header>
      </div>
    </>
  );
}

export default App;
