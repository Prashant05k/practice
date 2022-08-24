import React from "react";
// import "./Style.css";
import ModuleStyles from "./ExternalStyles.module.css";

//external styles import "./Style.css";
// export default function StyleSheet(props) {
//     const styles = props.isValue ? 'demo1' : 'demo2'
//   return (
//     <div className={`${styles} demo3`}>StyleSheet</div>
//   )
// }

//inline styles
export default function StyleSheet(props) {
  const sty = {
    color: "red",
  };
  return (
    <div>
      <h3 style={sty}>Inline css</h3>
      <div className="demo4">
        Styles imported in App.js inherited the styles without importing in child components
      </div>
      <div className="failure"> Failure: {'className={StylesCss.success}>'} Styles imported in App.js by defining StylesCss is not inheriting in child components. But files imported normally can access the styles in child components.
        Styles imported in App.js inherited the styles without importing here
      </div>
    </div>
  );
}
